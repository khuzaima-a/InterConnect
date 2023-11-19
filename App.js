import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ForgotPassword from './Screens/ForgotPassword';
import Signup from "./Screens/Signup";
import OTP from "./Screens/OTP";
import ResetPassword from './Screens/ResetPassword';
import Login from './Screens/Login';
import FindRide from './Screens/FindRide';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FindRide />
    </SafeAreaView>
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
