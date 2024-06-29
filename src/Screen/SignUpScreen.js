import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ThemeLightTextColor,
  backgroundColor,
  black,
  blue,
  grey,
  light_grey,
  primary,
  secondary,
  tertiary,
  white,
} from '../Utils/Colors/Colors';
import Text_Input from '../Components/TextInput';
import Primary_Button from '../Components/PrimaryButton';
import FocusAwareStatusBar from '../Components/FocusAwareStatusBar';
import CheckBox from '@react-native-community/checkbox';
import {Bold, Medium, Regular, SemiBold} from '../Utils/Fonts/FontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserIcon from '../Utils/Images/Icons/UserIcon';
import LockIcon from '../Utils/Images/Icons/LockIcon';
import BusinessIcon from '../Utils/Images/Icons/BussinessIcon';
import PortalIcon from '../Utils/Images/Icons/PortalIcon';
import MapIcon from '../Utils/Images/Icons/MapIcon';
import MessageModal from '../Components/MessageModal';
import MainLogoIcon from '../Utils/Images/Icons/MainLogoIcon';
import DangerIconRed from '../Utils/Images/Icons/DangerIConRed';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import {firebase, firestore} from '@react-native-firebase/firestore';
import LoaderModel from '../Components/LoaderBox.Component';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CustomDropDownBtn from '../Components/CustomDropDownBtn';

const SignupScreen = ({navigation}) => {
  const [messageModalShow, setMessageModalShow] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iconPass, setIconPass] = useState(true);

  const [birthDate, setBirthDate] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState('');
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const [gender, setGender] = useState('');
  const [genderFocus, setGenderFocus] = useState(false);
  const [genderError, setGenderError] = useState(false);

  const [age, setAge] = useState('');
  const [ageFocus, setAgeFocus] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const [isError, setIsError] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setBirthDate(moment(date).format('DD/MM/YYYY'));
    hideDatePicker();
  };

  useEffect(() => {
    if (email !== '') {
      setEmailError(false);
    }
  }, [email]);

  useEffect(() => {
    if (password !== '') {
      setPasswordError(false);
    }
  }, [password]);

  useEffect(() => {
    if (firstName !== '') {
      setFirstNameError(false);
    }
  }, [firstName]);

  useEffect(() => {
    if (lastName !== '') {
      setLastNameError(false);
    }
  }, [lastName]);

  useEffect(() => {
    if (gender !== '') {
      setGenderError(false);
    } else if (firstName !== '' && age !== '' && gender === '') {
      setGenderError(true);
    }
  }, [gender]);

  useEffect(() => {
    if (age !== '') {
      setAgeError(false);
    }
  }, [age]);

  useEffect(() => {
    if (messageModalShow) {
      setTimeout(() => {
        setMessageModalShow(false);
        navigation.navigate('LocationScreen');
      }, 3000);
    }
  }, [messageModalShow]);

  const trimInputFields = () => {
    setEmail(email.trim());
    setPassword(password.trim());
    setFirstName(firstName.trim());
    setLastName(lastName.trim());
    setGender(gender.trim());
    setAge(age.trim());
  };

  const Register_User = userid => {
    try {
      setLoading(true);
      const userRef = firebase.firestore().collection('users').doc(userid);

      userRef
        .set({
          birthday: birthDate,
          email: email,
          firstName: firstName,
          user_Id: userid,
          lastName: lastName,
          gender: gender,
          age: age,
          typeOfUser: 'customer',
          profilePicture: '',
        })
        .then(() => {
          userRef
            .get()
            .then(doc => {
              if (doc.exists) {
                const userData = doc.data();
                setLoading(false);
                console.log(userData);
                showMessage({
                  message: 'Registered Successfully',
                  type: 'success',
                });
                navigation.navigate('LoginScreen');
              } else {
                console.log('No such document!');
                setLoading(false);
              }
            })
            .catch(error => {
              console.error('Error getting document:', error);
              setLoading(false);
            });
        })
        .catch(error => {
          console.error('Error adding document:', error);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log('<><><>', error);
    }
  };

  const userRegister = () => {
    let errorFlag = false;

    // trimInputFields();

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

    if (firstName === '') {
      showMessage({
        message: 'Name is required.',
        type: 'danger',
      });
      errorFlag = true;
    }

    if (gender === '') {
      showMessage({
        message: 'Gender is required.',
        type: 'danger',
      });
      errorFlag = true;
    }

    if (age === '') {
      showMessage({
        message: 'Age is required.',
        type: 'danger',
      });
      errorFlag = true;
    }

    if (birthDate === '') {
      showMessage({
        message: 'Birthdate is required.',
        type: 'danger',
      });
      errorFlag = true;
    }

    if (!errorFlag) {
      try {
        setLoading(true);

        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(data => {
            setLoading(false);
            console.log('User signed up successfully:', data);
            Register_User(data.user.uid);
          })
          .catch(error => {
            setLoading(false);
            handleFirebaseError(error);
          });
      } catch (error) {
        console.log('>?>?>?>?>>', error);
        setLoading(false);
        handleFirebaseError(error);
      }
    }
  };

  const handleFirebaseError = error => {
    switch (error.code) {
      case 'auth/invalid-email':
        showMessage({
          message: 'Invalid email address.',
          type: 'danger',
        });
        break;
      case 'auth/email-already-in-use':
        showMessage({
          message:
            'Email address is already in use. Please use a different email.',
          type: 'danger',
        });
        break;
      case 'auth/invalid-password':
        showMessage({
          message:
            'Password is invalid or too weak. Please choose a stronger password.',
          type: 'danger',
        });
        break;
      case 'auth/network-request-failed':
        showMessage({
          message:
            'Network request failed. Please check your internet connection.',
          type: 'danger',
        });
        break;
      case 'auth/too-many-requests':
        showMessage({
          message: 'Too many registration attempts. Please try again later.',
          type: 'danger',
        });
        break;
      case 'auth/weak-password':
        showMessage({
          message: 'Password should be at least 6 characters.',
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
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={false}
      />
      {messageModalShow ? (
        <MessageModal
          MessageTitle={'You’ve Successfully Signed up!'}
          MessageDetail={
            'Welcome! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
          }
        />
      ) : (
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <View style={styles.mainLogo}>
            <Text style={[styles.titleLogo, {fontFamily: Bold, color: white}]}>
              ChampEng
            </Text>
          </View>
          <View style={styles.SignupCotnianer}>
            <Text style={styles.titleLogo}>Sign Up</Text>
          </View>
          <View style={styles.ContantContainer}>
            <View style={{alignSelf: 'center'}}>
              <Text_Input
                icon={<BusinessIcon />}
                placeholder={'Enter Name'}
                width={Dimensions.get('screen').width / 1.1}
                onChangeText={text => {
                  setFirstName(text.trim());
                }}
                error={firstNameError}
                IsFocus={firstNameFocus}
                onFocus={() => {
                  setFirstNameFocus(true);
                }}
                onBlur={() => {
                  setFirstNameFocus(false);
                }}
              />
              <Text_Input
                icon={<UserIcon />}
                placeholder={'Enter Age'}
                width={Dimensions.get('screen').width / 1.1}
                onChangeText={text => {
                  setAge(text.trim());
                }}
                error={ageError}
                IsFocus={ageFocus}
                onFocus={() => {
                  setAgeFocus(true);
                }}
                onBlur={() => {
                  setAgeFocus(false);
                }}
                keyboardType={'number-pad'}
              />
              <CustomDropDownBtn
                listData={[
                  {title: 'Male', value: 'male'},
                  {title: 'Female', value: 'female'},
                  {title: 'Other', value: 'other'},
                ]}
                value={gender}
                onCangeValue={text => setGender(text)}
                title={'Select Gender'}
                mainHeading={'Select Your Gender'}
                error={genderError}
                width={Dimensions.get('screen').width / 1.1}
              />
              <TouchableOpacity onPress={showDatePicker}>
                <Text_Input
                  width={Dimensions.get('screen').width / 1.1}
                  icon={
                    <Ionicons name="calendar-outline" size={18} color={black} />
                  }
                  placeholder={birthDate === '' ? 'Birth Date' : birthDate}
                  error={isError}
                  IsFocus={isDatePickerVisible}
                  onFocus={() => {
                    setDatePickerVisibility(true);
                  }}
                  onBlur={() => {
                    setDatePickerVisibility(false);
                  }}
                  editable={false}
                />
              </TouchableOpacity>
              <Text_Input
                width={Dimensions.get('screen').width / 1.1}
                icon={<UserIcon />}
                placeholder={'Email'}
                keyboardtype={'email-address'}
                onChangeText={text => setEmail(text.trim())}
                IsFocus={emailFocus}
                error={emailError}
                onFocus={() => {
                  setEmailFocus(true);
                }}
                onBlur={() => {
                  setEmailFocus(false);
                }}
              />
              <Text_Input
                width={Dimensions.get('screen').width / 1.1}
                icon={<LockIcon />}
                placeholder={'Password'}
                secureTextEntry={iconPass}
                onChangeText={text => setPassword(text.trim())}
                IsFocus={passwordFocus}
                error={passwordError}
                onFocus={() => {
                  setPasswordFocus(true);
                }}
                onBlur={() => {
                  setPasswordFocus(false);
                }}
              />
            </View>
            <View style={styles.BottomContainer}>
              <Primary_Button
                Button_Title={'Signup'}
                width={Dimensions.get('screen').width / 1.1}
                onPress={userRegister}
                backgroundColor={white}
                Text_color={black}
              />
            </View>
            <View style={styles.lastContainer}>
              <Text style={[styles.titleLogo, {color: black, fontSize: 15}]}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}>
                <Text
                  style={[
                    styles.titleLogo,
                    {color: primary, fontSize: 15, fontFamily: SemiBold},
                  ]}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 14,
  },
  Main_Container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  SignupCotnianer: {
    padding: 20,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContantContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  titleLogo: {
    color: ThemeLightTextColor,
    fontFamily: Bold,
    fontSize: 24,
  },
  term: {
    color: ThemeLightTextColor,
    fontSize: 12,
    marginHorizontal: 10,
  },
  BottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  mainLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignupScreen;
