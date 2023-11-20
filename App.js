import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import ForgotPassword from './Screens/ForgotPassword';
import Signup from "./Screens/Signup";
import OTP from "./Screens/OTP";
import ResetPassword from './Screens/ResetPassword';
import Login from './Screens/Login';
import FindRide from './Screens/FindRide';
import TabBar from './Components/TabBar';
import Feed from "./Screens/Feed";
import React, {useState} from 'react'

export default function App() {
const handlePressOutside = () => {
  Keyboard.dismiss();
};

  return (
    // <TouchableWithoutFeedback onPress={handlePressOutside}>
      <SafeAreaView style={styles.container}>
        <Feed />
      </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
