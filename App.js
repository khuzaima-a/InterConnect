import { StyleSheet, View, Keyboard, Text } from 'react-native';
import React, { useState } from "react";
import {
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from './Screens/ForgotPassword';
import Signup from "./Screens/Signup";
import OTP from "./Screens/OTP";
import ResetPassword from './Screens/ResetPassword';
import Login from './Screens/Login';
import FindRide from './Screens/FindRide';
import TabBar from './Components/TabBar';
import Feed from "./Screens/Feed";
import RideDetails from './Screens/RideDetails';
import Profile from './Screens/Profile';
import Pickup from './Screens/Pickup';
import Dropoff from './Screens/Dropoff';
import TimePick from './Screens/TimePick';
import DatePick from './Screens/DatePick';


export default function App() {
  const Stack = createStackNavigator();

const handlePressOutside = () => {
  Keyboard.dismiss();
};

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TimePick"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Pickup" component={Pickup} />
          <Stack.Screen name="Dropoff" component={Dropoff} />
          <Stack.Screen name="DatePick" component={DatePick} />
          <Stack.Screen name="TimePick" component={TimePick} />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="RideDetails" component={RideDetails} />
          <Stack.Screen name="FindRide" component={FindRide} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"red"
  },
});
