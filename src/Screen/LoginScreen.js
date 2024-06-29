import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ThemeLightTextColor, black, blue, primary, white } from '../Utils/Colors/Colors';
import Text_Input from '../Components/TextInput';
import Primary_Button from '../Components/PrimaryButton';
import FocusAwareStatusBar from '../Components/FocusAwareStatusBar';
import CheckBox from '@react-native-community/checkbox';
import { Bold, Medium, SemiBold } from '../Utils/Fonts/FontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserIcon from '../Utils/Images/Icons/UserIcon';
import LockIcon from '../Utils/Images/Icons/LockIcon';
import DangerIconRed from '../Utils/Images/Icons/DangerIConRed';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import LoaderModel from '../Components/LoaderBox.Component';
import { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../Redux/Actions/UserActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [iconPass, setIconPass] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (email !== '') {
      setEmailError(false);
      setIsError(false);
    }
  }, [email]);

  useEffect(() => {
    if (password !== '') {
      setPasswordError(false);
      setIsError(false);
    }
  }, [password]);

  const login = () => {
    if (password === '' || email === '') {
      if (email === '') {
        showMessage({
          message: 'Email is required.',
          type: 'danger',
        });
        errorFlag = true;
      }
  
      if (password === '') {
        showMessage({
          message: 'Password is required.',
          type: 'danger',
        });
        errorFlag = true;
      }
    } else {
      setLoading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          fetchUserData(user.uid);
        })
        .catch((error) => {
          setLoading(false);
          handleFirebaseError(error);
        });
    }
  };

  const fetchUserData = async (uid) => {
    try {
      const userDocument = await firestore().collection('users').doc(uid).get();
      if (userDocument.exists) {
        const userData = userDocument.data();
        dispatch(saveUserData(userData));
        await AsyncStorage.setItem('uid', uid);
        navigation.navigate('TabNavigation');
      } else {
        showMessage({
          message: 'User data not found.',
          type: 'danger',
        });
      }
    } catch (error) {
      showMessage({
        message: 'Failed to fetch user data. Please try again later.',
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFirebaseError = (error) => {
    switch (error.code) {
      case 'auth/invalid-email':
        showMessage({
          message: 'Please enter a valid email address.',
          type: 'danger',
        });
        break;
      case 'auth/user-not-found':
        showMessage({
          message: 'User not found. Please check your email.',
          type: 'danger',
        });
        break;
      case 'auth/wrong-password':
        showMessage({
          message: 'Incorrect password. Please try again.',
          type: 'danger',
        });
        break;
      case 'auth/network-request-failed':
        showMessage({
          message: 'Network request failed. Please check your internet connection.',
          type: 'danger',
        });
        break;
      case 'auth/too-many-requests':
        showMessage({
          message: 'Too many login attempts. Please try again later.',
          type: 'danger',
        });
        break;
      case 'auth/invalid-credential':
        showMessage({
          message: 'The supplied auth credential is incorrect.',
          type: 'danger',
        });
        break;
      default:
        console.error('Unhandled Firebase error:', error);
        showMessage({
          message: 'An error occurred. Please try again later.',
          type: 'danger',
        });
        break;
    }
  };

  return (
    <View style={styles.Main_Container}>
      <LoaderModel isVisible={loading} color={primary} />

      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={false}
      />

      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={styles.mainLogo}>
          <Text style={[styles.titleLogo, { fontFamily: Bold, color: white }]}>ChampEng</Text>
        </View>
        <View>
          <Text style={styles.titleLogo}>Login</Text>
        </View>
        <View style={styles.ContantContainer}>
          <View style={{ alignSelf: 'center' }}>
            <Text_Input
              width={Dimensions.get('screen').width / 1.1}
              icon={<UserIcon />}
              placeholder={'Enter your Email'}
              value={email}
              onChangeText={text => setEmail(text)}
              error={emailError}
              IsFocus={emailFocus}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <Text_Input
              icon={<LockIcon />}
              width={Dimensions.get('screen').width / 1.1}
              placeholder={'Password'}
              value={password}
              onChangeText={text => setPassword(text)}
              error={passwordError}
              IsFocus={passwordFocus}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              secureTextEntry={iconPass}
              isActive={true}
              IdIcon={
                <TouchableOpacity onPress={() => setIconPass(prev => !prev)}>
                  <Ionicons
                    name={iconPass ? 'eye-off' : 'eye'}
                    size={24}
                    color={primary}
                  />
                </TouchableOpacity>
              }
            />
          </View>
        </View>
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginHorizontal: 30 }}
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.forgotpassword_text}>Forgotten password?</Text>
        </TouchableOpacity>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50, marginBottom: 10 }}>
          <Primary_Button
            backgroundColor={white}
            Text_color={black}
            Button_Title={'Login'}
            width={"90%"}
            onPress={login}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
          <Text style={styles.forgotpassword_text}>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={[styles.forgotpassword_text, { left: 5, fontFamily: SemiBold, color: blue }]}>Signup</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: '#852dfe',
  },
  mainLogo: {
    marginTop: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  SignupButton: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('screen').width / 3.5,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: white
  },
  SignupButtotnext: {
    fontSize: 16,
    fontFamily: SemiBold,
    color: white
  },
  titleLogo: {
    fontSize: 25,
    paddingHorizontal: 20,
    marginBottom: 30,
    fontFamily: SemiBold,
    color: white,
  },
  forgotpassword_text: {
    fontSize: 16,
    fontFamily: Medium,
    color: white,
  },
});
