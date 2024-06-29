import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {black, primary, white} from '../Utils/Colors/Colors';
import {Bold, Medium} from '../Utils/Fonts/FontFamily';
import FocusAwareStatusBar from './FocusAwareStatusBar';
const OnboardingCard = ({
  Icon,
  SkipPress,
  CardTitle,
  Description,
  onPress,
  image
}) => {
  return (
    <ImageBackground
      source={image}
      style={styles.imageBackground}
    >
      <View style={styles.overlay}>
          <View style={styles.dontaccount}>
            <View/>
            <TouchableOpacity onPress={SkipPress} style={styles.skipButton}>
              <Text style={styles.createOne}>SKIP</Text>
            </TouchableOpacity>
          </View>
        <View style={styles.slide1}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{CardTitle}</Text>
            <Text style={styles.dex}>{Description}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  slide1: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 250, // Adjust this value as needed to position the text
  },
  text: {
    color: white,
    fontSize: 20,
    fontFamily: Bold,
    marginBottom: 10,
  },
  dex: {
    color: white,
    fontSize: 14,
    fontFamily: Medium,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  dontaccount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop:50
  },
  skipButton: {
    padding: 10,
  },
  createOne: {
    color: white,
    fontFamily: Medium,
    fontSize: 16,
  },
});


export default OnboardingCard;

