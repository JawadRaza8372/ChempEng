import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import {Dimensions, StyleSheet} from 'react-native';

import {View} from 'react-native';
import { white } from '../Utils/Colors/Colors';
const LoaderModel = ({isVisible, color}) => {
  return (
    <Modal isVisible={isVisible} style={styles.Main_Compoenent}>
      <View style={styles.Loader_Component}>
        <Spinner type="FadingCircleAlt" size={50} color={white} />
      </View>
    </Modal>
  );
};
export default LoaderModel;
const styles = StyleSheet.create({
  Loader_Component: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  Main_Compoenent: {
    flex: 1,
    margin: 0,

    backgroundColor: 'transparent',
  },
});
