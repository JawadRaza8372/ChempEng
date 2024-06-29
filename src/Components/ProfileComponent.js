import React, {useState} from 'react';
import {
  Dimensions,
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

const ProfileComponenet = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [checked, setChecked] = React.useState('Male');
  const [iconPass, setIconPass] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailerror] = React.useState(false);
  const [EmailFocus, setEmailFocus] = React.useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  return (
    <View style={styles.MainCotnaienr}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageCotnaienr}>
          <Image
            style={styles.iamge}
            source={require('../Utils/Images/Images/backupProfile.jpeg')}
          />
          <View style={{left: 15}}>
            <Text style={styles.titleName}>Mark Zukerberg</Text>
            <Text style={styles.titleId}>ID PARAINAGE : 01825</Text>
            <Text style={styles.titleId}>Niveau 1</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editIcon}>
          <EditIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.ViewDataCotnaienr}>
        <Text style={styles.DataTitle}>BIODATA</Text>
        <Text_Input
          placeholder={'Enter your First Name'}
          width={Dimensions.get('screen').width / 1.2}
        />
        <Text_Input
          placeholder={'Enter your Last Name'}
          width={Dimensions.get('screen').width / 1.2}
        />
        <View style={styles.GenderContianer}>
          <RadioButton
            value="Male"
            status={checked === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Male')}
          />
          <Text style={{color: black, fontFamily: Medium, fontSize: 14}}>
            Male
          </Text>
          <RadioButton
            value="Female"
            status={checked === 'Female' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Female')}
          />
          <Text style={{color: black, fontFamily: Medium, fontSize: 14}}>
            Female
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#E8E7F0',
            marginBottom: 20,
          }}>
          <TouchableOpacity style={styles.InputContainer}>
            <Text style={styles.textInput}>19/01/1999</Text>
            <DateIcon />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#E8E7F0',
            marginBottom: 20,
          }}>
          <Text style={styles.DataTitle}>Address</Text>
          <Text_Input
            placeholder={'Address Name'}
            width={Dimensions.get('screen').width / 1.2}
          />
          <Text_Input
            placeholder={'Address Street'}
            width={Dimensions.get('screen').width / 1.2}
          />
          <Text_Input
            placeholder={'City'}
            width={Dimensions.get('screen').width / 1.2}
          />
          <Text_Input
            placeholder={'Postal Number'}
            width={Dimensions.get('screen').width / 1.2}
          />
          <Text_Input
            placeholder={'State'}
            width={Dimensions.get('screen').width / 1.2}
          />
          <Text_Input
            placeholder={'Number'}
            width={Dimensions.get('screen').width / 1.2}
          />
          <Text_Input
            placeholder={'Email'}
            width={Dimensions.get('screen').width / 1.2}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#E8E7F0',
            marginBottom: 20,
          }}>
          <Text style={styles.DataTitle}>Mon mot de passe</Text>
          <Text_Input
            width={Dimensions.get('screen').width / 1.2}
            placeholder={'Old password'}
            secureTextEntry={iconPass}
            isActive={true}
            IdIcon={
              <TouchableOpacity
                onPress={() => {
                  setIconPass(prev => !prev);
                }}>
                <Ionicons
                  name={iconPass ? 'eye-off' : 'eye'}
                  size={24}
                  color={primary}
                />
              </TouchableOpacity>
            }
          />
          <Text_Input
            width={Dimensions.get('screen').width / 1.2}
            placeholder={'New password'}
            secureTextEntry={iconPass}
            isActive={true}
            IdIcon={
              <TouchableOpacity
                onPress={() => {
                  setIconPass(prev => !prev);
                }}>
                <Ionicons
                  name={iconPass ? 'eye-off' : 'eye'}
                  size={24}
                  color={primary}
                />
              </TouchableOpacity>
            }
          />
          <Text_Input
            width={Dimensions.get('screen').width / 1.2}
            placeholder={'Confrim new password'}
            secureTextEntry={iconPass}
            isActive={true}
            IdIcon={
              <TouchableOpacity
                onPress={() => {
                  setIconPass(prev => !prev);
                }}>
                <Ionicons
                  name={iconPass ? 'eye-off' : 'eye'}
                  size={24}
                  color={primary}
                />
              </TouchableOpacity>
            }
          />
        </View>
        <View
          style={{
            marginBottom: 20,
          }}>
          <Text style={styles.DataTitle}>Mes informations de paiement</Text>
          <Text_Input
            width={Dimensions.get('screen').width / 1.2}
            placeholder={'Old password'}
            secureTextEntry={iconPass}
            isActive={true}
            IdIcon={
              <TouchableOpacity
                onPress={() => {
                  setIconPass(prev => !prev);
                }}>
                <Ionicons
                  name={iconPass ? 'eye-off' : 'eye'}
                  size={24}
                  color={primary}
                />
              </TouchableOpacity>
            }
          />
          <View style={styles.cvvContianer}>
            <TextInput style={styles.cvvInput} placeholder="MM/AA" />
            <TextInput
              placeholder="CVC"
              style={[styles.cvvInput, {right: 10}]}
            />
          </View>
        </View>
      </View>
      <View style={{alignSelf: 'center', marginTop: 20}}>
        <Primary_Button
          Button_Title={'Save changes'}
          backgroundColor={primary}
          Text_color={white}
          borderColor={primary}
          onPress={() => navigation.navigate('PricingPlanScreen')}
          width={Dimensions.get('screen').width / 1.1}
        />
      </View>
    </View>
  );
};
export default ProfileComponenet;
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
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
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
    marginTop: 20,
  },
  DataTitle: {
    fontSize: 16,
    opacity: 0.6,
    fontFamily: Medium,
    color: black,
    marginBottom: 15,
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
});
