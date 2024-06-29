import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Regular, SemiBold} from '../Utils/Fonts/FontFamily';
import Text_Input from '../Components/TextInput';
import Primary_Button from '../Components/PrimaryButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import storage from '@react-native-firebase/storage';
import {firebase} from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {backgroundColor, black, primary, white} from '../Utils/Colors/Colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import firestore from '@react-native-firebase/firestore';

import moment from 'moment';
import {updateUserData} from '../Redux/Actions/UserActions';
import LoaderModel from '../Components/LoaderBox.Component';
import CustomDropDownBtn from '../Components/CustomDropDownBtn';
const EditPersonalInfoScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.user.userData); // Access user data from Redux state

  // State to manage form inputs and profile picture
  const [name, setName] = useState(userProfile?.firstName || '');
  const [age, setAge] = useState(userProfile?.age || '');
  const [gender, setGender] = useState(userProfile?.gender || '');
  const [email, setEmail] = useState(userProfile?.email || '');
  const [profilePicture, setProfilePicture] = useState(
    userProfile?.profilePicture || null,
  ); // Store profile picture as state
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthDate, setBirthDate] = useState(userProfile?.birthday || null);

  // Show date picker
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // Hide date picker
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Handle date selection
  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setBirthDate(moment(date).format('DD/MM/YYYY'));
    hideDatePicker();
  };

  // Function to update profile in Firestore
  const updateProfileInFirestore = updatedProfile => {
    return firestore()
      .collection('users')
      .doc(userProfile?.user_Id)
      .update(updatedProfile);
  };

  // Function to upload profile picture to Firebase Storage

  const uploadProfilePictureToStorage = async () => {
    if (!profilePicture) {
      return null; // No new profile picture selected, resolve with null
    }

    const storageRef = storage().ref(`profilePictures/${userProfile.user_Id}`);
    try {
      await storageRef.putFile(profilePicture);
      const downloadUrl = await storageRef.getDownloadURL();
      return downloadUrl; // Return the download URL of the uploaded profile picture
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      throw error; // Throw error to handle it in the caller function
    }
  };

  const handleUpdateProfile = () => {
    setLoading(true);

    const updatedProfile = {
      birthday: birthDate,
      email: email,
      firstName: name,
      user_Id: userProfile.user_Id,
      lastName: 'dsd', // Example: You can set the last name here
      gender: gender,
      age: age,
      typeOfUser: 'customer',
      profilePicture: userProfile.profilePicture || '', // Initialize with current profile picture URL
    };

    updateProfileInFirestore(updatedProfile)
      .then(() => uploadProfilePictureToStorage())
      .then(newProfilePictureUrl => {
        if (newProfilePictureUrl) {
          return updateProfileInFirestore({
            profilePicture: newProfilePictureUrl,
          });
        }
        return Promise.resolve();
      })
      .then(() => {
        dispatch(updateUserData(updatedProfile));
        setLoading(false);
        navigation.navigate('TabNavigation');
      })
      .catch(error => {
        setLoading(false);
        console.error('Error updating profile:', error);
        // Handle error here
      });
  };

  // Function to handle choosing profile picture
  // Function to handle choosing profile picture
  const handleChooseProfilePicture = () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // Launch image picker
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri; // Get the URI of the selected image
        console.log(uri);
        setProfilePicture(uri); // Set selected image URI as profile picture in state
      }
    });
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
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={styles.mainLogo}>
          <Text
            style={[styles.titleLogo, {fontFamily: SemiBold, color: 'white'}]}>
            ChampEng
          </Text>
        </View>
        <View style={styles.SignupContainer}>
          <Text style={styles.titleLogo}>Update Information</Text>
        </View>
        <View style={styles.userContainer}>
          <Image
            source={
              profilePicture
                ? {uri: profilePicture}
                : require('../Utils/Images/Images/backupProfile.jpeg')
            }
            style={styles.userIcon}
          />
          <TouchableOpacity
            onPress={handleChooseProfilePicture}
            style={{position: 'absolute', bottom: 20, right: 160}}>
            <FontAwesome
              name="camera"
              size={24}
              color="primary"
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ContentContainer}>
          <View style={{alignSelf: 'center'}}>
            <Text_Input
              icon={<FontAwesome name="user" size={24} color="black" />}
              placeholder={'Enter Name'}
              width={Dimensions.get('screen').width / 1.1}
              value={name}
              onChangeText={text => setName(text)}
            />
            <Text_Input
              icon={<FontAwesome name="user" size={24} color="primary" />}
              placeholder={'Enter Age'}
              width={Dimensions.get('screen').width / 1.1}
              value={age}
              onChangeText={text => setAge(text)}
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
              width={Dimensions.get('screen').width / 1.1}
            />
            <TouchableOpacity onPress={showDatePicker}>
              <Text_Input
                width={Dimensions.get('screen').width / 1.1}
                icon={
                  <Ionicons name="calendar-outline" size={24} color={black} />
                }
                placeholder={birthDate === '' ? 'Birth Date' : birthDate}
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
              icon={<FontAwesome name="envelope" size={24} color="primary" />}
              placeholder={'Enter Email'}
              width={Dimensions.get('screen').width / 1.1}
              value={email}
              onChangeText={text => setEmail(text)}
              editable={false}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Primary_Button
              backgroundColor={white}
              Text_color={black}
              Button_Title={'Update'}
              width={Dimensions.get('screen').width / 1.2}
              onPress={handleUpdateProfile}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditPersonalInfoScreen;

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  mainLogo: {
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleLogo: {
    fontSize: 25,
    paddingHorizontal: 20,
    marginBottom: 30,
    fontFamily: SemiBold,
    color: 'white',
  },
  ContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,

    justifyContent: 'center',
  },
  userIcon: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 120,
  },
});
