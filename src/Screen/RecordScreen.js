import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { primary, white } from "../Utils/Colors/Colors";
import { Medium } from "../Utils/Fonts/FontFamily";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from "@react-navigation/native";

const RecordScreen = ({ navigation }) => {
  const [selfAssessmentData, setSelfAssessmentData] = useState({
    win: 0,
    lose: 0,
    totalAttempts: 0
  });

  const [competitionData, setCompetitionData] = useState({
    playerOne: { name: "", results: { win: 0, lose: 0, total: 0 } },
    playerTwo: { name: "", results: { win: 0, lose: 0, total: 0 } }
  });

  const [scrabbleData, setScrabbleData] = useState({
    win: 0,
    lose: 0,
    totalGames: 0
  });

  const fetchSelfAssessmentData = async () => {
    try {
      const uid = await AsyncStorage.getItem('uid');
      if (!uid) return;
  
      const userDoc = await firestore().collection('users').doc(uid).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
  
        // Initialize totals
        let totalWin = 0;
        let totalLose = 0;
        let totalAttempts = 0;
  
        // Iterate through selfAssessments array
        userData.selfAssessments.forEach(assessment => {
          // Ensure results exist and are in the expected format
          if (assessment.results && typeof assessment.results === 'object') {
            const { win = 0, lose = 0, total = 0 } = assessment.results;
  
            // Accumulate totals
            totalWin += win;
            totalLose += lose;
            totalAttempts += total;
          }
        });
  
        // Set state with aggregated data
        setSelfAssessmentData({ win: totalWin, lose: totalLose, totalAttempts });
      }
    } catch (error) {
      console.error('Error fetching self-assessment data:', error.message);
    }
  };

  const fetchCompetitionData = async () => {
    try {
      const uid = await AsyncStorage.getItem('uid');
      if (!uid) return;
  
      const userDoc = await firestore().collection('users').doc(uid).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
  
        // Initialize totals
        let playerOneResults = { win: 0, lose: 0, total: 0 };
        let playerTwoResults = { win: 0, lose: 0, total: 0 };

        // Iterate through competition results
        if (userData.competitionResults.playerOne.results) {
          playerOneResults = userData.competitionResults.playerOne.results;
        }
        if (userData.competitionResults.playerTwo.results) {
          playerTwoResults = userData.competitionResults.playerTwo.results;
        }
  
        // Set state with player names and results
        setCompetitionData({
          playerOne: { name: userData.competitionResults.playerOne.name, results: playerOneResults },
          playerTwo: { name: userData.competitionResults.playerTwo.name, results: playerTwoResults }
        });
      }
    } catch (error) {
      console.error('Error fetching competition data:', error.message);
    }
  };

  const fetchScrabbleData = async () => {
    try {
      const uid = await AsyncStorage.getItem('uid');
      if (!uid) return;
  
      const userDoc = await firestore().collection('users').doc(uid).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
  
        // Initialize totals
        let totalWin = 0;
        let totalLose = 0;
        let totalGames = 0;
        
        // Iterate through scrabble array
        userData.scrabble.forEach(result => {
          // Ensure result is in the expected format
          if (result && typeof result === 'object' && result.accuracy !== undefined) {
            const accuracy = result.accuracy; // Assuming accuracy represents win percentage or some performance metric
  
            // Increment totals based on accuracy
            if (accuracy === 100) {
              totalWin++;
            } else {
              totalLose++;
            }
            totalGames++;
          }
        });
  
        // Set state with aggregated data
        setScrabbleData({ win: totalWin, lose: totalLose, totalGames });
      }
    } catch (error) {
      console.error('Error fetching scrabble data:', error.message);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchSelfAssessmentData();
      fetchCompetitionData();
      fetchScrabbleData(); // Fetch Scrabble data when screen is focused
    }, [])
  );

  useEffect(() => {
    fetchSelfAssessmentData();
    fetchCompetitionData();
    fetchScrabbleData(); // Initial fetch of Scrabble data on component mount
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>

      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
          <Ionicons name="arrow-back" size={24} color={white} />
        </TouchableOpacity>
        <Text style={styles.title}>Record</Text>
        <View></View>
      </View>

      <View style={styles.recordSection}>
        <Text style={styles.sectionTitle}>Self Assessment</Text>
        <View style={styles.recordData}>
          <Text style={styles.dataTitle}>Win:</Text>
          <Text style={styles.data}>{selfAssessmentData.win}</Text>
        </View>
        <View style={styles.recordData}>
          <Text style={styles.dataTitle}>Lose:</Text>
          <Text style={styles.data}>{selfAssessmentData.lose}</Text>
        </View>
        <View style={styles.recordData}>
          <Text style={styles.dataTitle}>Total Attempts:</Text>
          <Text style={styles.data}>{selfAssessmentData.totalAttempts}</Text>
        </View>
      </View>

      <View style={styles.recordSection}>
        <Text style={styles.sectionTitle}>Competition</Text>
        <View style={styles.recordData}>
          <Text style={styles.dataTitle}>{competitionData.playerOne.name}:</Text>
        </View>
        <View style={{marginBottom:20}}>
          <View style={styles.recordData}>
            <Text style={styles.dataTitle}>Win:</Text>
            <Text style={styles.data}>{competitionData.playerOne.results.win}</Text>
          </View>
          <View style={styles.recordData}>
            <Text style={styles.dataTitle}>Lose:</Text>
            <Text style={styles.data}>{competitionData.playerOne.results.lose}</Text>
          </View>
          <View style={styles.recordData}>
            <Text style={styles.dataTitle}>Total Attemps:</Text>
            <Text style={styles.data}>{competitionData.playerOne.results.total}</Text>
          </View>
        </View>
        <View style={styles.recordData}>
          <Text style={styles.dataTitle}>{competitionData.playerTwo.name}:</Text>
        </View>
        <View style={{marginBottom:20}}>
          <View style={styles.recordData}>
            <Text style={styles.dataTitle}>Win:</Text>
            <Text style={styles.data}>{competitionData.playerTwo.results.win}</Text>
          </View>
          <View style={styles.recordData}>
            <Text style={styles.dataTitle}>Lose:</Text>
            <Text style={styles.data}>{competitionData.playerTwo.results.lose}</Text>
          </View>
          <View style={styles.recordData}>
            <Text style={styles.dataTitle}>Total Attemps:</Text>
            <Text style={styles.data}>{competitionData.playerTwo.results.total}</Text>
          </View>
        </View>
      </View>

      <View style={styles.recordSection}>
        <Text style={styles.sectionTitle}>Scrabble</Text>
        <View style={styles.recordData}>
          <Text style={styles.dataTitle}>Win:</Text>
          <Text style={styles.data}>{scrabbleData.win}</Text>
        </View>
        <View style={styles.recordData}>
          <Text style={styles.dataTitle}>Lose:</Text>
          <Text style={styles.data}>{scrabbleData.lose}</Text>
        </View>
        <View style={styles.recordData}>
          <Text style={styles.dataTitle}>Total Games:</Text>
          <Text style={styles.data}>{scrabbleData.totalGames}</Text>
        </View>
      </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: Medium,
    color: white,
    textAlign: "center"
  },
  recordSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Medium,
    color: white,
    marginBottom: 10,
    textAlign: "center"
  },
  recordData: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  dataTitle: {
    fontSize: 16,
    fontFamily: Medium,
    color: white,
  },
  data: {
    fontSize: 16,
    fontFamily: Medium,
    color: white,
    marginBottom:5
  },
  viewInfoButton: {
    backgroundColor: white,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  viewInfoButtonText: {
    fontSize: 16,
    fontFamily: Medium,
    color: primary,
  },
  backIcon: {
    paddingRight: 10
  }
});

export default RecordScreen;
