import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, Alert, ScrollView, Modal, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { black, primary, white } from '../Utils/Colors/Colors';
import { Bold, Medium } from '../Utils/Fonts/FontFamily';

import { vowelQuestions, prepositionQuestions, vocabularyQuestions } from './Questions'; // Adjust path as per your file structure

const CompetationScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [seconds, setSeconds] = useState(659); // 10 minutes and 59 seconds
  const [resultsPlayerOne, setResultsPlayerOne] = useState({ win: 0, lose: 0, draw: 0, total: 0 });
  const [resultsPlayerTwo, setResultsPlayerTwo] = useState({ win: 0, lose: 0, draw: 0, total: 0 });
  const [switchingTurn, setSwitchingTurn] = useState(false);
  const [switchSeconds, setSwitchSeconds] = useState(5);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const itemsPerPage = 1;
  const totalPages = 15; // Assuming each category has 15 questions

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

  useEffect(() => {
    if (switchingTurn) {
      setIsModalVisible(true);
      const switchTimer = setInterval(() => {
        setSwitchSeconds(prevSeconds => {
          if (prevSeconds <= 0) {
            clearInterval(switchTimer);
            setSwitchingTurn(false);
            setSwitchSeconds(5);
            setIsPlayerOneTurn(false); // Switch to Player Two's turn
            setCurrentPage(1); // Reset to first question for Player Two
            setSelectedAnswer(null);
            setCorrectAnswer(null);
            setIsModalVisible(false);
          }
          return prevSeconds - 1;
        });
      }, 1000);
      return () => clearInterval(switchTimer);
    }
  }, [switchingTurn]);

  useEffect(() => {
    if (!isPlayerOneTurn && currentPage === 1) {
      setCurrentPage(2); // Start the second player's quiz immediately
    }
  }, [isPlayerOneTurn, currentPage]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setSelectedAnswer(null);
      setCorrectAnswer(null);
    } else {
      if (isPlayerOneTurn) {
        setSwitchingTurn(true);
      } else {
        setCurrentPage(totalPages + 1); // move to results page
      }
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

    const newResults = isPlayerOneTurn ? { ...resultsPlayerOne, total: resultsPlayerOne.total + 1 } : { ...resultsPlayerTwo, total: resultsPlayerTwo.total + 1 };

    if (selectedOption === correctOption) {
      isPlayerOneTurn ? newResults.win += 1 : newResults.win += 1;
    } else {
      isPlayerOneTurn ? newResults.lose += 1 : newResults.lose += 1;
    }

    isPlayerOneTurn ? setResultsPlayerOne(newResults) : setResultsPlayerTwo(newResults);

    // Delay for 1 second before moving to the next question
    setTimeout(() => {
      handleNextPage();
    }, 1000);
  };

  const submitResultsToFirestore = () => {
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      const userRef = firestore().collection('users').doc(currentUser.uid);

      userRef.update({
        competitionResults: {
          playerOne: {
            name: playerOne,
            results: resultsPlayerOne,
          },
          playerTwo: {
            name: playerTwo,
            results: resultsPlayerTwo,
          },
        },
      }).then(() => {
        Alert.alert('Results Submitted', 'Quiz results have been successfully submitted.');
      }).catch((error) => {
        console.error('Error updating document: ', error);
        Alert.alert('Error', 'Failed to submit quiz results.');
      });
    } else {
      console.error('User is not authenticated.');
      Alert.alert('Error', 'User is not authenticated.');
    }
  };

  const renderQuestions = () => {
  let questionsToDisplay = [];
  let questionIndex = (currentPage - 1) % 3;
  let arrayIndex = Math.floor((currentPage - 1) / 3);

  if (arrayIndex === 0) {
    questionsToDisplay = isPlayerOneTurn ? vowelQuestions.slice(questionIndex, questionIndex + 1) : prepositionQuestions.slice(questionIndex, questionIndex + 1);
  } else if (arrayIndex === 1) {
    questionsToDisplay = isPlayerOneTurn ? vocabularyQuestions.slice(questionIndex, questionIndex + 1) : vowelQuestions.slice(questionIndex, questionIndex + 1);
  } else {
    questionsToDisplay = isPlayerOneTurn ? prepositionQuestions.slice(questionIndex, questionIndex + 1) : vocabularyQuestions.slice(questionIndex, questionIndex + 1);
  }

  const currentQuestion = questionsToDisplay[0]; // Assuming only 1 question per page

  if (!currentQuestion) {
    return null; // Return null if currentQuestion is undefined
  }

  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>
      <Image source={currentQuestion.image} style={styles.questionImage} resizeMode='contain' />

      {currentQuestion.options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.optionButton,
            selectedAnswer === option.id && correctAnswer === currentQuestion.correctAnswer
              ? option.id === currentQuestion.correctAnswer
                ? { backgroundColor: 'green' }
                : { backgroundColor: 'red' }
              : null,
            option.id === currentQuestion.correctAnswer && selectedAnswer !== null ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => handleAnswerPress(option.id, currentQuestion.correctAnswer)}
          disabled={selectedAnswer !== null}
        >
          <Text style={styles.optionText}>{`${option.id}. ${option.text}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


  const renderResults = () => (
    <View style={styles.resultsContainer}>
      <Text style={styles.resultsTitle}>Competition Results</Text>
      <View style={styles.resultDataContainer}>
        <Text style={styles.resultText}>{`${playerOne} Results:`}</Text>
        <Text style={styles.resultText}>Win: {resultsPlayerOne.win}</Text>
        <Text style={styles.resultText}>Lose: {resultsPlayerOne.lose}</Text>
        <Text style={styles.resultText}>Draw: {resultsPlayerOne.draw}</Text>
        <Text style={styles.resultText}>Total Attempts: {resultsPlayerOne.total}</Text>
      </View>
      <View style={styles.resultDataContainer}>
        <Text style={styles.resultText}>{`${playerTwo} Results:`}</Text>
        <Text style={styles.resultText}>Win: {resultsPlayerTwo.win}</Text>
        <Text style={styles.resultText}>Lose: {resultsPlayerTwo.lose}</Text>
        <Text style={styles.resultText}>Draw: {resultsPlayerTwo.draw}</Text>
        <Text style={styles.resultText}>Total Attempts: {resultsPlayerTwo.total}</Text>
      </View>
      <TouchableOpacity
        style={styles.pageButton}
        onPress={() => {
          setCurrentPage(1);
          setResultsPlayerOne({ win: 0, lose: 0, draw: 0, total: 0 });
          setResultsPlayerTwo({ win: 0, lose: 0, draw: 0, total: 0 });
          setSeconds(659);
          submitResultsToFirestore();
        }}
      >
        <Text style={styles.pageButtonText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );

  const handleStartQuiz = () => {
    if (playerOne.trim() !== '' && playerTwo.trim() !== '') {
      setCurrentPage(2); // Start displaying questions
    } else {
      Alert.alert('Error', 'Please enter names for both players.');
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../Utils/Images/Images/2.jpg')}
    >
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.6)", paddingHorizontal: 20 }}>
        <ScrollView contentContainerStyle={styles.containerScroll}>
          {currentPage === 1 ? (
            <>
              <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                  <Ionicons name="arrow-back" size={24} color={white} />
                </TouchableOpacity>
                <Text style={styles.title}>Challenge</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Player One Name"
                value={playerOne}
                placeholderTextColor={white}
                onChangeText={text => setPlayerOne(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Player Two Name"
                placeholderTextColor={white}
                value={playerTwo}
                onChangeText={text => setPlayerTwo(text)}
              />
              <TouchableOpacity style={styles.startButton} onPress={handleStartQuiz}>
                <Text style={styles.startButtonText}>Start Quiz</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.timer}>{formatTime(seconds)}</Text>
              <Text style={styles.playerTurnText}>
                {switchingTurn
                  ? `${playerTwo}'s Turn starts in ${switchSeconds}s`
                  : `${isPlayerOneTurn ? playerOne : playerTwo}'s Turn`}
              </Text>
              {renderQuestions()}
              <View style={styles.paginationContainer}>
                {currentPage > 1 && (
                  <TouchableOpacity onPress={handlePreviousPage} style={styles.pageButton}>
                    <Text style={styles.pageButtonText}>Previous</Text>
                  </TouchableOpacity>
                )}
                <Text style={styles.pageNumber}>{`Page ${currentPage} of ${totalPages}`}</Text>
                {currentPage < totalPages && (
                  <TouchableOpacity onPress={handleNextPage} style={styles.pageButton}>
                    <Text style={styles.pageButtonText}>Next</Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}
          {currentPage > totalPages && renderResults()}
        </ScrollView>
      </View>

      {/* Modal for Turn Switching */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{`${playerTwo}'s Turn starts in ${switchSeconds}s`}</Text>
          </View>
        </View>
      </Modal>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backIcon: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: Bold,
    color: white,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: white,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: white,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: white,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  startButtonText: {
    fontSize: 16,
    fontFamily: Medium,
    color: primary,
    textAlign: 'center',
  },
  timer: {
    fontSize: 20,
    fontFamily: Medium,
    color: white,
    textAlign: 'center',
    marginBottom: 20,
  },
  playerTurnText: {
    fontSize: 18,
    fontFamily: Medium,
    color: white,
    textAlign: 'center',
    marginBottom: 10,
  },
  questionContainer: {
    backgroundColor: white,
    borderRadius: 10,
    padding: 20,
    shadowColor: black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  questionImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontFamily: Medium,
    color: black,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: primary,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    fontFamily: Medium,
    color: white,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageButton: {
    padding: 10,
    backgroundColor: white,
    borderRadius: 10,
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  pageButtonText: {
    fontSize: 16,
    fontFamily: Medium,
    color: primary,
  },
  pageNumber: {
    fontSize: 16,
    fontFamily: Medium,
    color: white,
  },
  resultsContainer: {
    marginTop: 20,
  },
  resultsTitle: {
    fontSize: 24,
    fontFamily: Bold,
    color: white,
    marginBottom: 20,
    textAlign: "center",
  },
  resultText: {
    fontSize: 20,
    fontFamily: Medium,
    color: white,
    marginVertical: 5,
  },
  resultDataContainer: {
    marginHorizontal: 40,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontFamily: Medium,
    color: black,
  },
});

export default CompetationScreen;
