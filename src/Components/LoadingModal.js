import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import SuccessIcon from '../Utils/Images/Icons/SuccessIcon';
import { secondary, tertiary, white } from '../Utils/Colors/Colors';
import { Regular, SemiBold } from '../Utils/Fonts/FontFamily';
import LoadingIcon from '../Utils/Images/Icons/LoadingIcon';

const LoadingModal = ({ MessageTitle, MessageDetail }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true
        }
      )
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View style={styles.MainContainer}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <LoadingIcon />
      </Animated.View>
      <View>
        <Text style={styles.successTitle}>The best of trading for the best!</Text>
        <Text style={styles.successTitleText}>{MessageDetail}</Text>
      </View>
    </View>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white
  },
  successTitle: {
    fontSize: 25,
    fontFamily: SemiBold,
    color: secondary,
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 10
  },
  successTitleText: {
    fontSize: 16,
    fontFamily: Regular,
    color: tertiary,
    textAlign: "center",
    marginHorizontal: 30
  }
});
