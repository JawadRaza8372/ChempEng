import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { grey, primary, secondary, white } from '../Utils/Colors/Colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5'; // Import icons from react-native-vector-icons
import SettingScreen from '../Screen/SettingScreen';

import { Medium } from '../Utils/Fonts/FontFamily';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    HomeScreen: 'home',
    FlightTrackingScreen: 'plane-departure',
    WeatherScreen: 'cloud',
    SettingScreen: 'cog',
  };

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const icon = icons[route.name]; // Get the icon name for the route

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabBarButton}>
            <FontAwesome5
              name={icon}
              size={24}
              color={isFocused ? primary: grey}
            />
            <Text
              style={[
                styles.tabBarLabel,
                {
                  color: isFocused ? primary: grey,
                },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
     
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: white,
    borderTopWidth: 1,
    borderTopColor: grey,
  },
  tabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: Medium,
    height: 25,
  },
});

export default TabNavigation;
