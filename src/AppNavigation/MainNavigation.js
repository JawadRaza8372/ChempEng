import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screen/SplashScreen';
import OnBoardingScreen from '../Screen/OnBoardingScreen';
import LoginScreen from '../Screen/LoginScreen';
import SignupScreen from '../Screen/SignUpScreen';
import TabNavigation from './BottomTab';
import SelfAssessmentScreen from '../Screen/SelfAsssessMentTestScreen';
import CompetationScreen from '../Screen/CompetationTestScreen';
import ScrabbleScreen from '../Screen/ScrabbleTestScreen';
import RecordScreen from '../Screen/RecordScreen';
import EditPersoanlInfoScreen from '../Screen/EditPersonalInfoScreen';
import CategorySelectionScreen from '../Screen/CategorySelectionScreen';
import ForgotPasswordScreen from '../Screen/ForgotPasswordScreen';
import HelpScreen from '../Screen/HelpScreen';




const Main_Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
          component={TabNavigation}
          name="TabNavigation"
          options={{headerShown: false}}
        />
           <Stack.Screen
          component={ForgotPasswordScreen}
          name="ForgotPasswordScreen"
          options={{headerShown: false}}
        />
    
        <Stack.Screen
          component={SplashScreen}
          name="SplashScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={OnBoardingScreen}
          name="OnBoardingScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={LoginScreen}
          name="LoginScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={SignupScreen}
          name="SignupScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={SelfAssessmentScreen}
          name="SelfAssessmentScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={CompetationScreen}
          name="CompetationScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={ScrabbleScreen}
          name="ScrabbleScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={RecordScreen}
          name="RecordScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={EditPersoanlInfoScreen}
          name="EditPersoanlInfoScreen"
          options={{headerShown: false}}
        />
           <Stack.Screen
          component={CategorySelectionScreen}
          name="CategorySelectionScreen"
          options={{headerShown: false}}
        />
          <Stack.Screen
          component={HelpScreen}
          name="HelpScreen"
          options={{headerShown: false}}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main_Navigation;
