import React, {useState, useEffect, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {black, primary, white, green, red} from '../Utils/Colors/Colors';
import {Bold, Medium, SemiBold} from '../Utils/Fonts/FontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  prepositionQuestions,
  vocabularyQuestions,
  vowelQuestions,
} from './Questions';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';

const SelfAssessmentScreen = ({navigation, route}) => {
  const userId = useSelector(state => state.user.userData.user_Id);
  const {category} = route.params; // Get category from route params
  const questions = useMemo(() => {
    return category === 'Preposition'
      ? prepositionQuestions
      : category === 'Vocabulary'
      ? vocabularyQuestions
      : vowelQuestions;
  }, [category]);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const itemsPerPage = 1;

  // Select random 15 questions only once
  const shuffleArray = array => {
    let shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const randomQuestions = useMemo(() => {
    const questionsPerPage = 15;
    const shuffledQuestions = shuffleArray(questions);
    return shuffledQuestions.slice(0, questionsPerPage);
  }, [questions]);

  const totalPages = Math.ceil(randomQuestions.length / itemsPerPage);

  const [seconds, setSeconds] = useState(659); // 10 minutes and 59 seconds
  const [results, setResults] = useState({win: 0, lose: 0, draw: 0, total: 0});

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      secs < 10 ? '0' : ''
    }${secs}`;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setSelectedAnswer(null);
      setCorrectAnswer(null);
    } else {
      setCurrentPage(totalPages + 1); // move to results page
      saveResultsToFirestore();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSelectedAnswer(null);
      setCorrectAnswer(null);
    }
  };

  const handleAnswerPress = (selectedOption, correctOption) => {
    setSelectedAnswer(selectedOption);
    setCorrectAnswer(correctOption);

    const newResults = {...results, total: results.total + 1};
    if (selectedOption === correctOption) {
      newResults.win += 1;
    } else {
      newResults.lose += 1;
    }
    setResults(newResults);

    // Delay for 1 second before moving to the next question
    setTimeout(() => {
      handleNextPage();
    }, 1000);
  };

  const saveResultsToFirestore = async () => {
    const assessmentData = {
      category,
      results,
    };

    try {
      const userRef = firestore().collection('users').doc(userId);
      const userDoc = await userRef.get();

      if (userDoc.exists) {
        const userData = userDoc.data();
        let {selfAssessments} = userData;

        // Initialize selfAssessments as an empty array if it's undefined
        if (!selfAssessments) {
          selfAssessments = [];
        }

        const categoryIndex = selfAssessments.findIndex(
          item => item.category === category,
        );

        if (categoryIndex !== -1) {
          // Update existing category data
          selfAssessments[categoryIndex] = {
            ...selfAssessments[categoryIndex],
            ...assessmentData,
            results: {
              win: selfAssessments[categoryIndex].results.win + results.win,
              lose: selfAssessments[categoryIndex].results.lose + results.lose,
              draw: selfAssessments[categoryIndex].results.draw + results.draw,
              total:
                selfAssessments[categoryIndex].results.total + results.total,
            },
          };
        } else {
          // Add new category data to selfAssessments
          selfAssessments.push(assessmentData);
        }

        await userRef.update({
          selfAssessments,
        });

        console.log('Assessment data saved successfully!');
      } else {
        console.error('User document not found.');
      }
    } catch (error) {
      console.error('Error saving assessment data:', error);
    }
  };

  const renderQuestions = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const questionsToDisplay = randomQuestions.slice(startIndex, endIndex);

    return questionsToDisplay.map((item, index) => (
      <View key={index} style={styles.questionContainer}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: SemiBold,
            color: black,
            fontSize: 18,
            marginBottom: 10,
          }}>
          {category}
        </Text>
        <Text style={styles.questionText}>{item.question}</Text>
        <Image
          source={item.image}
          style={styles.questionImage}
          resizeMode="contain"
        />
        {item.options.map(option => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              selectedAnswer === option.id &&
              correctAnswer === item.correctAnswer
                ? option.id === item.correctAnswer
                  ? {backgroundColor: green}
                  : {backgroundColor: red}
                : null,
              option.id === item.correctAnswer && selectedAnswer !== null
                ? {backgroundColor: green}
                : null,
            ]}
            onPress={() => handleAnswerPress(option.id, item.correctAnswer)}
            disabled={selectedAnswer !== null}>
            <Text
              style={styles.optionText}>{`${option.id}. ${option.text}`}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  const renderResults = () => (
    <View style={styles.resultsContainer}>
      <Text style={styles.resultsTitle}>Self Assessment Results</Text>
      <View style={styles.resultDataContainer}>
        <Text style={styles.resultText}>Pass:</Text>
        <Text style={styles.resultText}>{results.win}</Text>
      </View>
      <View style={styles.resultDataContainer}>
        <Text style={styles.resultText}>Fail:</Text>
        <Text style={styles.resultText}>{results.lose}</Text>
      </View>
      <View style={styles.resultDataContainer}>
        <Text style={styles.resultText}>Total Attempts:</Text>
        <Text style={styles.resultText}>{results.total}</Text>
      </View>
      <TouchableOpacity
        style={styles.pageButton}
        onPress={() => {
          navigation.navigate('CategorySelectionScreen');
          // setCurrentPage(1);
          // setResults({ win: 0, lose: 0, draw: 0, total: 0 });
          // setSeconds(659);
        }}>
        <Text style={styles.pageButtonText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      style={styles.container}
      source={require('../Utils/Images/Images/backiamge1.jpg')}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', padding: 20}}>
        <ScrollView
          contentContainerStyle={styles.containerScroll}
          showsVerticalScrollIndicator={false}>
          {currentPage <= totalPages ? (
            <>
              <View style={styles.titleContainer}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.backIcon}>
                  <Ionicons name="arrow-back" size={24} color={white} />
                </TouchableOpacity>
                <Text style={styles.title}>Self Assessment</Text>
                <View></View>
              </View>
              {renderQuestions()}
              <View style={styles.paginationContainer}>
                {currentPage > 1 && (
                  <TouchableOpacity
                    onPress={handlePreviousPage}
                    style={styles.pageButton}>
                    <Text style={styles.pageButtonText}>Previous</Text>
                  </TouchableOpacity>
                )}
                <Text
                  style={
                    styles.pageNumber
                  }>{`Page ${currentPage} of ${totalPages}`}</Text>
                {currentPage < totalPages && (
                  <TouchableOpacity
                    onPress={handleNextPage}
                    style={styles.pageButton}>
                    <Text style={styles.pageButtonText}>Next</Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          ) : (
            renderResults()
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: primary,
  },
  containerScroll: {
    flexGrow: 1,
  },
  titleContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Bold,
    color: white,
    fontSize: 20,
  },
  questionContainer: {
    marginBottom: 20,
    backgroundColor: white,
    padding: 20,
    borderRadius: 10,
  },
  questionText: {
    fontFamily: SemiBold,
    fontSize: 16,
    color: black,
    marginBottom: 10,
  },
  questionImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  optionButton: {
    padding: 15,
    backgroundColor: primary,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontFamily: Medium,
    color: white,
    fontSize: 14,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  pageButton: {
    padding: 10,
    backgroundColor: primary,
    borderRadius: 10,
  },
  pageButtonText: {
    fontFamily: Medium,
    color: white,
    fontSize: 14,
  },
  pageNumber: {
    fontFamily: Medium,
    color: white,
    fontSize: 14,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsTitle: {
    fontFamily: Bold,
    fontSize: 24,
    color: white,
    marginBottom: 20,
  },
  resultDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  resultText: {
    fontFamily: Medium,
    fontSize: 18,
    color: white,
  },
});

export default SelfAssessmentScreen;
