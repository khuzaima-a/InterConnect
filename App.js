import { StyleSheet, Text, View } from 'react-native';
import ForgotPassword from './Screens/ForgotPassword';
import Signup from "./Screens/Signup";
import OTP from "./Screens/OTP";
import ResetPassword from './Screens/ResetPassword';
import Login from './Screens/Login';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ResetPassword />
      {/* <ForgotPassword /> */}
      {/* <Login /> */}
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
