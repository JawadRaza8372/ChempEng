import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Text_Input from '../Components/TextInput';
import Primary_Button from '../Components/PrimaryButton';
import FocusAwareStatusBar from '../Components/FocusAwareStatusBar';
import UserIcon from '../Utils/Images/Icons/UserIcon';
import { Bold, Medium, SemiBold } from '../Utils/Fonts/FontFamily';
import auth from '@react-native-firebase/auth';
import { showMessage } from 'react-native-flash-message';
import LoaderModel from '../Components/LoaderBox.Component';
import { primary } from '../Utils/Colors/Colors';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendResetEmail = () => {
    if (email === '') {
      showMessage({
        message: 'Please enter your email.',
        type: 'danger',
      });
      return;
    }

    setLoading(true);
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        showMessage({
          message: 'Password reset email sent successfully!',
          type: 'success',
        });
      })
      .catch((error) => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      })
      .finally(() => setLoading(false));
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
          <Text style={[styles.titleLogo, { fontFamily: Bold, color: 'white' }]}>
            ChampEng
          </Text>
        </View>

        <View>
          <Text style={styles.titleLogo}>Forgot Password</Text>
        </View>

        <View style={styles.ContantContainer}>
          <View style={{ alignSelf: 'center' }}>
            <Text_Input
              width={Dimensions.get('screen').width / 1.1}
              icon={<UserIcon />}
              placeholder={'Enter your Email'}
              value={email}
              onChangeText={(text) => setEmail(text)}
              error={emailError}
              IsFocus={emailFocus}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            marginBottom: 10,
          }}>
          <Primary_Button
            backgroundColor={'white'}
            Text_color={'black'}
            Button_Title={'Send Code'}
            width={'90%'}
            onPress={sendResetEmail}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLogo: {
    fontSize: 25,
    paddingHorizontal: 20,
    marginBottom: 30,
    fontFamily: SemiBold,
    color: 'white',
  },
});
