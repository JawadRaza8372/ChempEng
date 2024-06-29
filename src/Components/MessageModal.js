import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SuccessIcon from '../Utils/Images/Icons/SuccessIcon';
import { secondary, tertiary, white } from '../Utils/Colors/Colors';
import { Regular, SemiBold } from '../Utils/Fonts/FontFamily';
const MessageModal = ({MessageTitle,MessageDetail}) => {
   
  return (
    <View style={styles.MainContianer}>
      <SuccessIcon />
      <View>
        <Text style={styles.succesTitle}>{MessageTitle}</Text>
        <Text style={styles.succesTitleText}>
          {MessageDetail}
        </Text>
      </View>
    </View>
  );
};
export default MessageModal;
const styles = StyleSheet.create({
  MainContianer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:white
  },
  succesTitle:{
    fontSize:25,
    fontFamily:SemiBold,
    color:secondary,
    textAlign:"center",
    marginHorizontal:30,
    marginBottom:10
  },
  succesTitleText:{
    fontSize:16,
    fontFamily:Regular,
    color:tertiary,
    textAlign:"center",
    marginHorizontal:30
  }
});
