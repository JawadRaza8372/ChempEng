import React, {useState} from 'react';
import {
    Alert,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  PanResponder,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EditIcon from '../Utils/Images/Icons/EditIcon';
import {Bold, Medium, Regular, SemiBold} from '../Utils/Fonts/FontFamily';
import {backColor, black, light_grey, primary, white} from '../Utils/Colors/Colors';
import Text_Input from './TextInput';
import CheckBox from '@react-native-community/checkbox';
import {RadioButton} from 'react-native-paper';
import DateIcon from '../Utils/Images/Icons/DateIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LockIcon from '../Utils/Images/Icons/LockIcon';
import Primary_Button from './PrimaryButton';
import CrownIcon from '../Utils/Images/Icons/CrownIcon';
import DiamondIcon from '../Utils/Images/Icons/DiamondIcon';
import DiamondIcon1 from '../Utils/Images/Icons/DiamondICon1';
import Diamond2Icon from '../Utils/Images/Icons/Diamond2';
import Diamond3Icon from '../Utils/Images/Icons/Diamond3Icon';
import Diamond4Icon from '../Utils/Images/Icons/Diamond4Icon';
import Diamond7Icon from '../Utils/Images/Icons/Diamond7Icon';
import Diamond6Icon from '../Utils/Images/Icons/Diamond6Icon';
import Diamond5Icon from '../Utils/Images/Icons/Diamond5Icon';
import CheckIcon from '../Utils/Images/Icons/CheckIcon';

const ProgressCompoenet = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [checked, setChecked] = React.useState('Male');
  const [iconPass, setIconPass] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailerror] = React.useState(false);
  const [EmailFocus, setEmailFocus] = React.useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [selectedLeve,setSelectedLevel]=useState(1)
  console.log(selectedLeve)
   const [value, setValue] = useState(0);
  const [panResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Calculate the new value based on the gesture's x-coordinate
        const newValue = /* Calculate the new value */
        // Update the value state
        setValue(newValue);
      },
    })
  );
  const data = [
    {
      profileImage: require('../Utils/Images/Images/3.png'),
      email: 'john.travolta@gmail.com',
      number: '+33766891354',
      addressRation1: '1 : 4',
      addressRation2: '2 : 6',
      name: 'Active subscription',
    },
    {
      profileImage: require('../Utils/Images/Images/2.png'),
      email: 'john.travolta@gmail.com',
      number: '+33766891354',
      addressRation1: '1 : 4',
      addressRation2: '2 : 6',
      name: 'Watch Video 1',
    },
    {
      profileImage: require('../Utils/Images/Images/4.png'),
      email: 'john.travolta@gmail.com',
      number: '+33766891354',
      addressRation1: '1 : 4',
      addressRation2: '2 : 6',
      name: 'Watch Video 2',
    },
    {
        profileImage: require('../Utils/Images/Images/4.png'),
        email: 'john.travolta@gmail.com',
        number: '+33766891354',
        addressRation1: '1 : 4',
        addressRation2: '2 : 6',
        name: 'Active Sponsorships',
      },
  ];
  const Statistic = [
    {
      profileImage: require('../Utils/Images/Images/3.png'),

      name: 'Tony Parker',
      count: '201',
      level: 2,
    },
    {
      profileImage: require('../Utils/Images/Images/2.png'),

      name: 'Elon Musk',
      count: '321',
      level: 1,
    },
    {
      profileImage: require('../Utils/Images/Images/4.png'),
      name: 'Emmanuel...',
      count: '138',
      level: 3,
    },
  ];
  const levels = [
    {
      level: 1,
      icon: <DiamondIcon1 backgroundColor={selectedLeve >= 1 ? black : "grey"} />,
    },
    {
      level: 2,
      icon: <Diamond2Icon backgroundColor={selectedLeve >= 2 ? black : "grey"} />,
    },
    {
      level: 3,
      icon: <Diamond3Icon backgroundColor={selectedLeve >= 3 ? black : "grey"} />,
    },
    {
      level: 4,
      icon: <Diamond4Icon backgroundColor={selectedLeve >= 4 ? black : "grey"} />,
    },
    {
      level: 5,
      icon: <Diamond5Icon backgroundColor={selectedLeve >= 5 ? black : "grey"} />,
    },
    {
      level: 6,
      icon: <Diamond6Icon backgroundColor={selectedLeve >= 6 ? black : "grey"} />,
    },
    {
      level: 7,
      icon: <Diamond7Icon backgroundColor={selectedLeve >= 7 ? black : "grey"} />,
    },
  ];
  
  const renderStatisticItem = ({item}) => (
    <View style={styles.tabItem}>
      <View style={{height: 120, justifyContent: 'flex-end'}}>
        <ImageBackground
          imageStyle={{borderRadius: 100, borderWidth: 4, borderColor: white}}
          source={item.profileImage}
          style={{
            marginBottom: 20,
            width: item.level === 1 ? 100 : 70,
            height: item.level === 1 ? 100 : 70,
            alignSelf: 'flex-end',
          }}>
          {item.level === 1 ? (
            <View style={styles.crownIconContainer}>
              <CrownIcon />
            </View>
          ) : null}
          <View
            style={[
              styles.levelCotnainer,
              {
                backgroundColor:
                  item.level === 1
                    ? '#EB8F23'
                    : item.level === 2
                    ? '#7B79B0'
                    : '#A57548',
              },
            ]}>
            <Text style={styles.level}>#{item.level}</Text>
          </View>
        </ImageBackground>
      </View>
      <Text style={[styles.tabText]} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.tabCount}>{item.count}</Text>
      <Text style={styles.tabCount}>Parainages</Text>
    </View>
  );
  return (
    <View style={styles.MainCotnaienr}>
      <View style={styles.tabmainContianer}>
        <FlatList
          data={Statistic}
          renderItem={renderStatisticItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabContainer}
        />
      </View>
      <View style={styles.ViewDataCotnaienr}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.DataTitle}>Evolution personnel</Text>
          <Text style={[styles.tabCount, {marginBottom: 6}]}>
            Total parainages : 83
          </Text>
          <View style={styles.DiamondIcon}>
            <Text style={[styles.DataTitle, {fontSize: 14, marginBottom: 0}]}>
              <DiamondIcon /> ID PARAINAGE : 01825
            </Text>
          </View>
        </View>
        <View style={{justifyContent:"center",alignItems:"center",marginTop:20,marginBottom:20}}>
            <DiamondIcon1 height={80} width={80}
            backgroundColor={primary} 
            />
          <Text style={styles.DataTitle}>Niveau 2</Text>

        </View>
        <View style={{justifyContent: 'center', alignItems: 'center',marginBottom:20}}>
          <FlatList
            numColumns={7}
            data={levels}
            
            renderItem={({item, index}) => {
                return (
                    <View style={styles.diamondCotnaienr} >
                  <TouchableOpacity onPress={()=>setSelectedLevel(item.level)}>{item.icon}</TouchableOpacity>
                  {index < levels.length - 1 && <View style={styles.horizontalLine} />}
                </View>
              );
            }}
          />
        </View>

        <View>
          <FlatList
            data={data}
            ItemSeparatorComponent={<View style={{borderBottomWidth:1,borderBottomColor:'#E8E7F0',marginBottom:20}}/>}

            renderItem={({item, index}) => {
              return (
                  <View style={styles.imageContianer}>
                  
                      <Text style={styles.name}>{item.name}</Text>
                      {
                        item.name==='Active Sponsorships'?
                        <Text style={{fontSize:16,fontFamily:SemiBold,color:black}}>7</Text>
                        :<CheckIcon/>
                      }
                   
                </View>
              );
            }}
          />
        </View>

      </View>
    </View>
  );
};
export default ProgressCompoenet;
const styles = StyleSheet.create({
  MainCotnaienr: {
    flex: 1,
    zIndex: 2000,
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
    fontSize: 18,
    fontFamily: SemiBold,
    color: black,
    textAlign: 'center',
    marginBottom: 5,
  },
  DiamondIcon: {
    width: 'auto',
    height: 35,
    borderWidth: 1,
    borderColor: '#E8E7F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    opacity: 0.6,
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
    marginBottom:10,
    justifyContent:"space-between"
  },
  name: {
    fontSize: 16,
    fontFamily: SemiBold,
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
    // paddingVertical: 10,
    // paddingHorizontal: 5,
  },
  tabItem: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontFamily: SemiBold,
    fontSize: 15,
    color: black,
  },
  tabCount: {
    fontFamily: Regular,
    fontSize: 13,
    color: black,
    opacity: 0.6,
  },
  tabmainContianer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
  levelCotnainer: {
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    borderRadius: 20,
    height: 20,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  level: {
    fontSize: 14,
    fontFamily: Medium,
    color: white,
  },
  CrownIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  crownIconContainer: {
    position: 'absolute',
    top: -10,
    zIndex: 1,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diamondCotnaienr: {
    flexDirection:"row",alignItems:"center"
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: 'black', // Set your desired color here
    width: 15, // Adjust the width as needed
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    width: '80%',
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
  },
  point: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
    position: 'absolute',
    top: '50%',
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  value: {
    marginTop: 20,
    fontSize: 18,
  },
  
});
