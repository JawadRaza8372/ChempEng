import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EditIcon from '../Utils/Images/Icons/EditIcon';
import {Medium, Regular, SemiBold} from '../Utils/Fonts/FontFamily';
import {black, light_grey, primary, white} from '../Utils/Colors/Colors';
import Text_Input from './TextInput';
import CheckBox from '@react-native-community/checkbox';
import {RadioButton} from 'react-native-paper';
import DateIcon from '../Utils/Images/Icons/DateIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LockIcon from '../Utils/Images/Icons/LockIcon';
import Primary_Button from './PrimaryButton';
import UserIcon from '../Utils/Images/Icons/UserIcon';
import HomeActiveIcon from '../Utils/Images/Icons/HomeActiveIcon';
import KeyIcon from '../Utils/Images/Icons/KeyIcon';
import CardIcon from '../Utils/Images/Icons/CardIcon';
import FarwordIcon from '../Utils/Images/Icons/FarwordIcon';
import HomeInActiveIcon from '../Utils/Images/Icons/HomeInActiveIcon';

const ProfileComponenet2 = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [checked, setChecked] = React.useState('Male');
  const [iconPass, setIconPass] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailerror] = React.useState(false);
  const [EmailFocus, setEmailFocus] = React.useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const tabScreens = [
    {
      name: 'Personal details',
      icon: <UserIcon />,
      onCLick: () => navigation.navigate('ProfilePersonalDetailScreen'),
    },
    {
      name: 'Address',
      icon: <HomeInActiveIcon width={20} height={20} />,
      onCLick: () => navigation.navigate('ProfileAddressScreen'),
    },
    {
      name: 'Password',
      icon: <KeyIcon />,
      onCLick: () => navigation.navigate('ProfilePasswordScreen'),
    },
    {
      name: 'Payment information',
      icon: <CardIcon />,
      onCLick: () => navigation.navigate('ProfilePaymentScreen'),
    },
  ];
  return (
    <View style={styles.MainCotnaienr}>
      <View style={styles.ViewDataCotnaienr}>
        <View style={[styles.profileContainer, {marginTop: 0}]}>
          <View style={styles.profileImageCotnaienr}>
            <Image
              style={[styles.iamge, {width: 80, height: 80, marginTop: -40}]}
              source={require('../Utils/Images/Images/backupProfile.jpeg')}
            />
          </View>
          <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.titleName}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.profileContainer,
            {paddingHorizontal: 10, marginBottom: 20},
          ]}>
          <View style={styles.profileImageCotnaienr}>
            <View>
              <Text style={[styles.titleName, {fontSize: 20}]}>
                Mark Zukerberg
              </Text>
              <Text style={styles.titleId}>ID PARAINAGE : 01825</Text>
            </View>
          </View>
          <Text style={styles.titleId}>Niveau 1</Text>
        </View>
        <View>
          <FlatList
            data={tabScreens}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.tabContainer}
                  onPress={() => item.onCLick()}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View>{item.icon}</View>
                    <Text style={styles.DataTitle}>{item.name}</Text>
                  </View>
                  <FarwordIcon />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default ProfileComponenet2;
const styles = StyleSheet.create({
  MainCotnaienr: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  profileImageCotnaienr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleName: {
    fontSize: 18,
    fontFamily: SemiBold,
    color: black,
  },
  titleId: {
    fontSize: 14,
    marginTop: 3,
    fontFamily: Regular,
    color: black,
    opacity: 0.7,
  },
  editIcon: {
    width: 'auto',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0000001A',
  },
  ViewDataCotnaienr: {
    width: Dimensions.get('screen').width / 1.1,
    height: 'auto',
    backgroundColor: white,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 70,
  },
  DataTitle: {
    fontSize: 18,
    fontFamily: SemiBold,
    color: black,
    left: 15,
  },
  GenderContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    fontSize: 16,
    fontFamily: SemiBold,
    color: black,
    flex: 1,
  },
  InputContainer: {
    width: Dimensions.get('screen').width / 1.2,
    borderRadius: 10,
    borderColor: black,
    marginBottom: 20,
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: light_grey,
  },
  cvvContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cvvInput: {
    width: Dimensions.get('screen').width / 2.7,
    borderRadius: 10,
    borderColor: black,
    height: 65,
    backgroundColor: light_grey,
    fontSize: 16,
    fontFamily: SemiBold,
    color: black,
    paddingHorizontal: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingHorizontal: 15,
  },
});
