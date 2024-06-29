import React from 'react';

import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { White_Color } from '../Config/Colors/Colors';

const DialogBox = ({rendertItem, icon, visible, onPress, buttonTitle}) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    style={{zIndex:-1}}
  
      >
      {rendertItem}
    </Modal>
  );
};

export default DialogBox;
