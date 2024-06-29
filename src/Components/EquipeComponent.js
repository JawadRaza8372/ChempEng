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
import {Bold, Medium, Regular, SemiBold} from '../Utils/Fonts/FontFamily';
import {black, light_grey, primary, white} from '../Utils/Colors/Colors';
import Text_Input from './TextInput';
import CheckBox from '@react-native-community/checkbox';
import {RadioButton} from 'react-native-paper';
import DateIcon from '../Utils/Images/Icons/DateIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LockIcon from '../Utils/Images/Icons/LockIcon';
import Primary_Button from './PrimaryButton';

const EquipeComponenet = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [checked, setChecked] = React.useState('Male');
  const [iconPass, setIconPass] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailerror] = React.useState(false);
  const [EmailFocus, setEmailFocus] = React.useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const data = [
    {
      profileImage: require('../Utils/Images/Images/backupProfile.jpeg'),
      email: 'john.travolta@gmail.com',
      number: '+33766891354',
      addressRation1: '1 : 4',
      addressRation2: '2 : 6',
      name: 'John TRAVOLTA',
    },
    {
      profileImage: require('../Utils/Images/Images/backupProfile.jpeg'),
      email: 'john.travolta@gmail.com',
      number: '+33766891354',
      addressRation1: '1 : 4',
      addressRation2: '2 : 6',
      name: 'John TRAVOLTA',
    },
    {
      profileImage: require('../Utils/Images/Images/backupProfile.jpeg'),
      email: 'john.travolta@gmail.com',
      number: '+33766891354',
      addressRation1: '1 : 4',
      addressRation2: '2 : 6',
      name: 'John TRAVOLTA',
    },
  ];
  const Statistic = [
    {
      name: 'Niveau 1',
      count: '8',
    },
    {
      name: 'Niveau 2',
      count: '24',
    },
    {
      name: 'Niveau 3',
      count: '51',
    },
  ];
  const renderStatisticItem = ({item}) => (
    <View style={styles.tabItem}>
      <Text style={styles.tabText}>{item.name}</Text>
      <Text style={styles.tabCount}>{item.count}</Text>
    </View>
  );
  return (
    <View style={styles.MainCotnaienr}>
      <View style={styles.profileContainer}>
        <Text style={styles.titleName}>83</Text>
        <Text style={styles.titleId}>Active</Text>
        <Text style={styles.titleId}>Referrals Total</Text>
      </View>
      <View style={styles.tabmainContianer}>
        <FlatList
          data={Statistic}
          renderItem={renderStatisticItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabContainer}
        />
        <View style={styles.bottomline}>
          <Text style={styles.bottemText}>Bonus mensuel : +1150€</Text>
        </View>
      </View>
      <View style={styles.ViewDataCotnaienr}>
        <Text style={styles.DataTitle}>Mes Filleuls</Text>
        <View>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <View style={{marginTop: 10}}>
                  <View style={styles.imageContianer}>
                    <Image
                      source={item.profileImage}
                      style={{height: 40, width: 40, borderRadius: 40}}
                    />
                    <View style={{left: 10}}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.email}>{item.email}</Text>
                      <Text style={styles.email}>{item.number}</Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.ButtonsView}>
                          <Text style={styles.buttonTitle}>
                            Niveau {item.addressRation1}
                          </Text>
                        </View>
                        <View style={[styles.ButtonsView, {left: 10}]}>
                          <Text style={styles.buttonTitle}>
                            Niveau {item.addressRation2}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default EquipeComponenet;
const styles = StyleSheet.create({
  MainCotnaienr: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 180,
    height: 180,
    borderRadius: 200 / 2,
    backgroundColor: white,
  },
  profileImageCotnaienr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleName: {
    fontSize: 40,
    fontFamily: Bold,
    color: primary,
  },
  titleId: {
    fontSize: 14,
    marginTop: 3,
    fontFamily: Medium,
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
    fontFamily: SemiBold,
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
  imageContianer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
    fontFamily: Medium,
    color: black,
  },
  email: {
    fontSize: 14,
    fontFamily: Regular,
    color: black,
    opacity: 0.8,
    marginTop: 6,
  },
  ButtonsView: {
    width: 'auto',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F5F5FF',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: Medium,
    color: black,
    opacity: 0.8,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  tabItem: {
    paddingHorizontal: 10,
    marginRight: 10,
  },
  tabText: {
    fontFamily: SemiBold,
    fontSize: 16,
    color: black,
  },
  tabCount: {
    fontFamily: SemiBold,
    fontSize: 18,
    color: primary,
  },
  tabmainContianer: {
    backgroundColor: white,
    width: Dimensions.get('screen').width / 1.1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bottomline: {
    width: '100%',
    height: 30,
    backgroundColor: '#0BB512',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  bottemText: {
    fontSize: 14,
    fontFamily: Medium,
    color: white,
  },
});
