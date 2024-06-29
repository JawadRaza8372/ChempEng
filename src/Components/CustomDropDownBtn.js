import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
  Keyboard,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  backgroundColor,
  black,
  light_grey,
  primary,
  white,
} from '../Utils/Colors/Colors';
import {Bold, SemiBold} from '../Utils/Fonts/FontFamily';

const CustomDropDownBtn = ({
  mainHeading,
  title,
  value,
  onCangeValue,
  listData,
  isDropDown,
  isDisabled,
  error,
  width,
}) => {
  const [openDropModel, setopenDropModel] = useState(false);
  const findtitle = () => {
    const result = listData?.filter(dat => dat.value === value);
    return result[0]?.title ? result[0]?.title : '';
  };
  const [searchInputTxt, setsearchInputTxt] = useState('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      },
    );

    // Cleanup
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <>
      <TouchableOpacity
        onPress={() => setopenDropModel(!openDropModel)}
        style={[
          styles.InputContainer,
          {
            width: width,
            backgroundColor: error ? '#FFE3E3' : white,
            borderColor: error ? '#E41818' : light_grey,
          },
        ]}>
        <FontAwesome name="transgender-alt" size={24} color="primary" />
        <Text style={styles.textInput}> {value ? findtitle() : title}</Text>
      </TouchableOpacity>
      <Modal
        visible={openDropModel}
        transparent
        onRequestClose={() => setopenDropModel(!openDropModel)}>
        <StatusBar backgroundColor={white} barStyle={'dark-content'} />
        <View style={styles.blacktransparentdiv}>
          <TouchableOpacity
            onPress={() => setopenDropModel(!openDropModel)}
            style={{flex: 1, width: '100%'}}
          />
          <View
            style={{
              ...styles.optionContainer,
            }}>
            <View
              style={{
                width: '90%',
                height: 70,
                alignSelf: 'center',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginVertical: 15,
              }}>
              <Text
                style={{
                  textAlign: 'right',
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: Bold,
                }}>
                {mainHeading}
              </Text>
            </View>

            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                flex: 1,
              }}>
              <FlatList
                keyExtractor={item => item.id}
                data={listData?.filter(dat =>
                  `${dat?.title}`
                    ?.toLowerCase()
                    ?.includes(searchInputTxt?.toLowerCase()),
                )}
                ItemSeparatorComponent={<View style={{marginBottom: 20}} />}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      onCangeValue(item?.value);
                      setopenDropModel(!openDropModel);
                    }}
                    style={styles.pointContainer}>
                    <View
                      style={{
                        ...styles.circleCont,
                        borderColor:
                          value !== item?.value ? '#BFD0E5' : backgroundColor,
                      }}>
                      {value === item?.value && (
                        <View style={styles.smallcont} />
                      )}
                    </View>
                    <View style={styles.firstTxtCont}>
                      <Text style={styles.customdropdownvaluetxt}>
                        {item?.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CustomDropDownBtn;

const styles = StyleSheet.create({
  customdropdownvaluetxt: {fontSize: 16, fontFamily: SemiBold, color: white},
  textInput: {
    fontSize: 16,
    fontFamily: SemiBold,
    color: black,
    flex: 1,
    marginLeft: 10,
  },
  InputContainer: {
    width: Dimensions.get('screen').width / 1.1,
    borderRadius: 10,
    borderColor: black,
    marginBottom: 20,
    height: 65,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: white,
    borderWidth: 1,
  },

  blacktransparentdiv: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight,
  },
  optionContainer: {
    width: '100%',
    backgroundColor: backgroundColor,
    height: Dimensions.get('screen').height / 2,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  pointContainer: {
    width: '100%',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  circleCont: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#FBFBFB',
    borderWidth: 1,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstTxtCont: {
    width: '87%',
  },
  smallcont: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: backgroundColor,
  },
});
