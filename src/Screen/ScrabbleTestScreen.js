import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, ImageBackground, Alert } from 'react-native';
import { primary, white, green, red } from '../Utils/Colors/Colors';
import { Bold, Medium } from '../Utils/Fonts/FontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';

const scrabbleWords = [
  { words: ["QUEEN", "HOUR", "Parachute", "Glove", "GLASS", "Suitcase", "Hourglass", "Parot"], image: require('../Utils/Images/Images/scra1.png') },
  { words: ["Umbrella", "Skateboard", "Submarine", "CELL", "WITCH", "TOPER"], image: require('../Utils/Images/Images/scra2.png') }
];

const ScrabbleScreen = ({ navigation }) => {
  const userData = useSelector(state => state.user.userData);

  const [inputWord, setInputWord] = useState("");
  const [selectedWords, setSelectedWords] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [correctCount, setCorrectCount] = useState(0);
  const [currentScrabble, setCurrentScrabble] = useState(scrabbleWords[0]);

  useEffect(() => {
    // Randomly select one of the scrabbleWords objects on component mount
    const randomIndex = Math.floor(Math.random() * scrabbleWords.length);
    setCurrentScrabble(scrabbleWords[randomIndex]);
  }, []);

  const handleOkButtonPress = () => {
    if (inputWord.trim() === "") {
      return; // Do nothing if input is empty
    }

    // Add the input word to selectedWords
    setSelectedWords(prevSelected => [...prevSelected, inputWord.trim()]);

    // Check if inputWord matches any word in the selected scrabble's words
    if (currentScrabble.words.includes(inputWord.trim())) {
      // Increment correct count
      setCorrectCount(prevCount => prevCount + 1);

      // Set background color of last added word button to green
      setTimeout(() => {
        setSelectedWords(prevSelected => {
          const updatedSelected = [...prevSelected];
          updatedSelected[updatedSelected.length - 1] = { word: inputWord.trim(), color: green };
          return updatedSelected;
        });
      }, 100);
    } else {
      // Set background color of last added word button to red
      setTimeout(() => {
        setSelectedWords(prevSelected => {
          const updatedSelected = [...prevSelected];
          updatedSelected[updatedSelected.length - 1] = { word: inputWord.trim(), color: red };
          return updatedSelected;
        });
        setAttemptsLeft(prevAttempts => prevAttempts - 1);
      }, 100);
    }

    // Clear input field after processing
    setInputWord("");
  };

  useEffect(() => {
    if (attemptsLeft <= 0) {
      const uid = userData.user_Id; // Replace with actual user ID or fetch from AsyncStorage

      // Calculate accuracy
      const accuracy = (correctCount / 3) * 100; // Assuming totalAttempts is always 3

      // Example data to be saved in Firestore
      const gameData = {
        scrabble: [{ accuracy: accuracy }],
        timestamp: firestore.FieldValue.serverTimestamp(),
      };

      // Save gameData to Firestore under the user's document
      firestore().collection('users').doc(uid).set(gameData, { merge: true })
        .then(() => {
          // Navigate back to home screen
          navigation.goBack();
        })
        .catch(error => {
          console.error('Error saving game data:', error);
        });
    }
  }, [attemptsLeft, correctCount, navigation, selectedWords, userData.user_Id]);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../Utils/Images/Images/3.jpg')}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.containerScroll} keyboardShouldPersistTaps={'handled'}>
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
              <Ionicons name="arrow-back" size={24} color={white} />
            </TouchableOpacity>
            <Text style={styles.title}>Scrabble</Text>
            <View></View>
          </View>
          <Image source={currentScrabble.image} style={styles.scrabbleImage} />
          <TextInput
            style={styles.input}
            value={inputWord}
            onChangeText={setInputWord}
            placeholder="Enter your word"
            placeholderTextColor={white}
          />
          <TouchableOpacity style={styles.okButton} onPress={handleOkButtonPress}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
          <View style={styles.selectedWordsContainer}>
            {selectedWords.map((wordObj, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.wordButton, { backgroundColor: wordObj.color || white }]}
                disabled={true}
              >
                <Text style={styles.wordButtonText}>{wordObj.word}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.attemptsText}>Attempts left: {attemptsLeft}</Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: Bold,
    color: white,
  },
  scrabbleImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: white,
    fontSize: 18,
    fontFamily: Medium,
    color: white,
    paddingVertical: 10,
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  okButtonText: {
    color: white,
    fontSize: 18,
    fontFamily: Medium,
  },
  selectedWordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'center',
  },
  wordButton: {
    backgroundColor: white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 5,
  },
  wordButtonText: {
    color: primary,
    fontSize: 16,
    fontFamily: Medium,
  },
  attemptsText: {
    color: white,
    fontFamily: Medium,
    textAlign: 'center',
  },
});

export default ScrabbleScreen;
