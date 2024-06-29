import 'react-native-gesture-handler';
import React, { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Main_Navigation from './src/AppNavigation/MainNavigation';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/Store';
import { StatusBar, View } from 'react-native';

const App=()=>{
  const flashRef = useRef();

  return(
    <Provider store={store}>
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={false}
      />

      <Main_Navigation />
      <FlashMessage ref={flashRef} />
    </View>
  </Provider>
  )
}
export default App