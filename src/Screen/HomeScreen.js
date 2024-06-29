import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import {ThemeColor, backgroundColor, white} from '../Utils/Colors/Colors';
import {Bold, SemiBold} from '../Utils/Fonts/FontFamily';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const [progressData, setProgressData] = useState([
    {id: '1', percentage: 0, title: 'Self Assessment'}, // Total win percentage
    {id: '2', percentage: 0.25, title: 'Competition'},
    {id: '3', percentage: 0, title: 'Scrabble'}, // Scrabble accuracy percentage
  ]);

  const userData = useSelector(state => state.user.userData);

  const fetchProgressData = async () => {
    try {
      const uid = await AsyncStorage.getItem('uid');
      if (!uid) return;

      const userDoc = await firestore().collection('users').doc(uid).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        const selfAssessments = userData.selfAssessments || [];
        const competitionResults = userData.competitionResults || {
          playerOne: {},
          playerTwo: {},
        };
        const scrabble = userData.scrabble || [];

        const calculatePercentage = category => {
          const categoryData = selfAssessments.find(
            item => item.category === category,
          );
          if (categoryData) {
            const {win, total} = categoryData.results;
            return total > 0 ? win / total : 0;
          }
          return 0;
        };

        const prepositionPercentage = calculatePercentage('Preposition');
        const vowelPercentage = calculatePercentage('Vowels');
        const vocabularyPercentage = calculatePercentage('Vocabulary');
        const totalPercentage =
          (prepositionPercentage + vowelPercentage + vocabularyPercentage) / 3;

        const calculateCompetitionPercentage = playerResults => {
          const {win, total} = playerResults;
          return total > 0 ? win / total : 0;
        };

        const competitionPercentagePlayerOne = calculateCompetitionPercentage(
          competitionResults.playerOne.results || {},
        );
        const competitionPercentagePlayerTwo = calculateCompetitionPercentage(
          competitionResults.playerTwo.results || {},
        );
        const competitionTotalPercentage =
          (competitionPercentagePlayerOne + competitionPercentagePlayerTwo) / 2;

        const scrabbleAccuracy =
          scrabble.length > 0 ? scrabble[0].accuracy / 100 : 0; // Assuming scrabble array contains at least one object with accuracy field

        setProgressData([
          {id: '1', percentage: totalPercentage, title: 'Self Assessment'}, // Total win percentage
          {
            id: '2',
            percentage: competitionTotalPercentage,
            title: 'Competition',
          }, // Competition percentage
          {id: '3', percentage: scrabbleAccuracy, title: 'Scrabble'}, // Scrabble accuracy percentage
        ]);
      }
    } catch (error) {
      console.error('Error fetching progress data:', error.message);
    }
  };

  useEffect(() => {
    fetchProgressData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchProgressData();
    }, []),
  );

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('uid');
      await auth().signOut();
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Failed to log out:', error.message);
    }
  };
  console.log(userData);
  return (
    <View style={styles.MainContainer}>
      <StatusBar backgroundColor={backgroundColor} barStyle={'light-content'} />
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SettingScreen')}>
              <Image
                source={
                  userData.profilePicture
                    ? {uri: userData.profilePicture}
                    : require('../Utils/Images/Images/backupProfile.jpeg')
                }
                style={styles.profilePicture}
              />
            </TouchableOpacity>

            <Text
              style={[styles.headerIconText, {textTransform: 'capitalize'}]}>
              {userData?.firstName ? userData?.firstName : '-'}
            </Text>
          </View>

          <View style={styles.headerIcons}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.headerIcon}
                onPress={() => navigation.navigate('HelpScreen')}>
                <Icon name="help-circle-outline" size={24} color={white} />
              </TouchableOpacity>
              <Text style={styles.headerIconText}>Help</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.headerIcon}
                onPress={() => logout()}>
                <Icon name="log-out-outline" size={24} color={white} />
              </TouchableOpacity>
              <Text style={styles.headerIconText}>Logout</Text>
            </View>
          </View>
        </View>

        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Progress Tracker</Text>
          <View style={styles.progressContainer}>
            {progressData.map(item => (
              <View key={item.id} style={styles.progressItem}>
                <Text style={styles.progressTitle}>{item.title}</Text>
                <Progress.Circle
                  size={100}
                  progress={item.percentage}
                  showsText
                  color="red"
                  unfilledColor={ThemeColor}
                  borderWidth={0}
                  thickness={5}
                  formatText={() => `${Math.round(item.percentage * 100)}%`}
                  textStyle={styles.progressText}
                />
              </View>
            ))}
          </View>
        </View>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.gameContainer}
            onPress={() => navigation.navigate('CategorySelectionScreen')}>
            <ImageBackground
              imageStyle={{borderRadius: 10}}
              source={require('../Utils/Images/Images/1.jpg')}
              style={styles.gameImageBackground}
              resizeMode="cover">
              <View style={styles.iamgebBackView}>
                <Text style={styles.gameTitle}>Self Assessment</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gameContainer}
            onPress={() => navigation.navigate('CompetationScreen')}>
            <ImageBackground
              imageStyle={{borderRadius: 10}}
              source={require('../Utils/Images/Images/3.jpg')}
              style={styles.gameImageBackground}
              resizeMode="cover">
              <View style={styles.iamgebBackView}>
                <Text style={styles.gameTitle}>Competition</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gameContainer}
            onPress={() => navigation.navigate('ScrabbleScreen')}>
            <ImageBackground
              imageStyle={{borderRadius: 10}}
              source={require('../Utils/Images/Images/2.jpg')}
              style={styles.gameImageBackground}
              resizeMode="cover">
              <View style={styles.iamgebBackView}>
                <Text style={styles.gameTitle}>Scrabble</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    paddingTop: 15,
    padding: 10,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: white,
    marginBottom: 5,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    alignItems: 'center',
    width: 60,
    justifyContent: 'center',
    marginHorizontal: 10,
    height: 60,
    borderRadius: 30,
    backgroundColor: backgroundColor,
    marginBottom: 5,
    elevation: 10,
  },
  headerIconText: {
    fontSize: 16,
    fontFamily: SemiBold,
    color: white,
  },
  logoContainer: {
    justifyContent: 'center',
    padding: 10,
  },
  logoText: {
    fontSize: 25,
    fontFamily: Bold,
    color: white,
    marginHorizontal: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  progressItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  progressTitle: {
    fontSize: 16,
    fontFamily: SemiBold,
    color: white,
    marginBottom: 5,
  },
  progressText: {
    fontSize: 16,
    fontFamily: Bold,
    color: white,
  },
  iamgebBackView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    marginTop: 20,
  },
  gameContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gameImageBackground: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameTitle: {
    fontSize: 20,
    fontFamily: Bold,
    color: white,
    textAlign: 'center',
  },
});

export default HomeScreen;
