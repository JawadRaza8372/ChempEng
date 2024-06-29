import React, {useEffect} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import FocusAwareStatusBar from '../Components/FocusAwareStatusBar';
import {white, black, SemiBold} from '../Utils/Colors/Colors';
import {useDispatch} from 'react-redux';
import {saveUserData} from '../Redux/Actions/UserActions';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserStatus = async () => {
      const user = auth().currentUser;
      if (user) {
        // User is logged in, check user type
        await checkUserType(user.uid);
      } else {
        // User not logged in, navigate to LoginScreen
        setTimeout(() => {
          navigation.replace('LoginScreen');
        }, 2500);
      }
    };

    const checkUserType = async uid => {
      try {
        const userDoc = await firestore().collection('users').doc(uid).get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          dispatch(saveUserData(userData));
          console.log('UserData:', userData); // Log user data
          setTimeout(() => {
            navigation.replace('TabNavigation');
          }, 1200);
        } else {
          setTimeout(() => {
            navigation.replace('LoginScreen');
          }, 2500);
        }
      } catch (error) {
        console.error('Error checking user type:', error);
        setTimeout(() => {
          navigation.replace('LoginScreen');
        }, 2500);
      }
    };

    checkUserStatus();
  }, [navigation, dispatch]);

  return (
    <ImageBackground
      source={require('../Utils/Images/Images/child.jpg')}
      style={styles.Main_Container}>
      <FocusAwareStatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <View style={styles.MainLogo}>
        <Text style={styles.logoText}>ChampEng</Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: white,
  },
  MainLogo: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logoText: {
    fontSize: 30,
    fontFamily: SemiBold,
    color: black,
  },
});
