import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import {useSelector} from 'react-redux';
import {primary, white, backgroundColor, black} from '../Utils/Colors/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome from @expo/vector-icons
import {Medium, Regular} from '../Utils/Fonts/FontFamily';

const SettingScreen = ({navigation}) => {
  const userData = useSelector(state => state.user.userData);
  console.log('>>>', userData);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={backgroundColor} barStyle={'light-content'} />
      <View style={styles.header}>
        <TouchableOpacity
          // onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          {/* <Ionicons name="arrow-back" size={24} color={white} /> */}
        </TouchableOpacity>
        <Text style={styles.profileTitle}>Profile</Text>
        <View></View>
      </View>

      <View style={styles.userContainer}>
        <Image
          source={
            userData?.profilePicture
              ? {uri: userData.profilePicture}
              : require('../Utils/Images/Images/backupProfile.jpeg')
          }
          style={styles.userIcon}
        />
      </View>

      <TouchableOpacity style={styles.dataBox}>
        <FontAwesome name="user" size={24} color={primary} />
        <View style={styles.dataInfo}>
          <Text style={styles.dataTitle}>
            {userData?.firstName || 'John Doe'}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dataBox}>
        <FontAwesome name="envelope" size={24} color={primary} />
        <View style={styles.dataInfo}>
          <Text style={styles.dataTitle}>
            {userData?.email || 'john.doe@example.com'}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dataBox}>
        <FontAwesome name="calendar" size={24} color={primary} />
        <View style={styles.dataInfo}>
          <Text style={styles.dataTitle}>
            {userData?.birthday || '01/01/1990'}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dataBox}>
        <FontAwesome name="transgender-alt" size={24} color={primary} />
        <View style={styles.dataInfo}>
          <Text style={[styles.dataTitle, {textTransform: 'capitalize'}]}>
            {userData?.gender || 'Male'}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonBox}
        onPress={() => navigation.navigate('RecordScreen')}>
        <FontAwesome name="book" size={24} color={primary} />
        <Text style={styles.buttonText}>Records</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonBox}
        onPress={() => navigation.navigate('EditPersoanlInfoScreen')}>
        <FontAwesome name="edit" size={24} color={primary} />
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  profileTitle: {
    fontSize: 24,
    fontFamily: Medium,
    color: white,
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
  userName: {
    fontSize: 18,
    fontFamily: Medium,
    color: white,
  },
  userInfo: {
    fontSize: 14,
    fontFamily: Regular,
    color: white,
  },
  dataBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: white,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  dataInfo: {
    marginLeft: 10,
  },
  dataTitle: {
    fontSize: 16,
    fontFamily: Medium,
    color: primary,
  },
  data: {
    fontSize: 14,
    fontFamily: Regular,
    color: black,
  },
  buttonBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: white,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Medium,
    color: primary,
    marginLeft: 10,
  },
});

export default SettingScreen;
