import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { white, backgroundColor, backColor } from '../Utils/Colors/Colors';
import { Bold, Regular } from '../Utils/Fonts/FontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HelpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={backgroundColor} barStyle={'light-content'}/>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.backIcon,{marginBottom:20}]}>
            <Ionicons name="arrow-back" size={24} color={white} />
          </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.headerText}>Help & Instructions</Text>
        <Text style={styles.paragraph}>
          Welcome to the Progress Tracker app! Here are some tips to help you get started:
        </Text>
        <Text style={styles.subHeader}>Self Assessment</Text>
        <Text style={styles.paragraph}>
          - Select the 'Self Assessment' option to test your knowledge in various categories.
          - Answer the questions to the best of your ability.
          - Track your progress and see how well you are doing in each category.
        </Text>
        <Text style={styles.subHeader}>Competition</Text>
        <Text style={styles.paragraph}>
          - Select the 'Competition' option to challenge another player.
          - Compete and try to score higher than your opponent.
          - Track your competition results and see your win percentage.
        </Text>
        <Text style={styles.subHeader}>Scrabble</Text>
        <Text style={styles.paragraph}>
          - Select the 'Scrabble' option to play a word game.
          - Form words and improve your vocabulary.
          - Track your accuracy and try to improve over time.
        </Text>
        <Text style={styles.footerText}>If you have any questions, feel free to reach out to our support team.</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontFamily: Bold,
    color: white,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    fontFamily: Bold,
    color: white,
    marginTop: 15,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    fontFamily: Regular,
    color: white,
    marginBottom: 10,
    lineHeight: 22,
  },
  footerText: {
    fontSize: 16,
    fontFamily: Regular,
    color: white,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default HelpScreen;
