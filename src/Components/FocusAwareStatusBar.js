import * as React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

function FocusAwareStatusBar({barStyle, translucent, backgroundColor}) {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      barStyle={barStyle || 'light-content'}
      translucent={translucent !== undefined ? translucent : true}
      backgroundColor={backgroundColor !== undefined ? backgroundColor : 'transparent'}
    />
  ) : null;
}

export default FocusAwareStatusBar;
