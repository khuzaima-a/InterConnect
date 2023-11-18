import { StyleSheet, Text, View } from 'react-native';
import ForgotPassword from './Screens/ForgotPassword';
import Signup from "./Screens/Signup";
import OTP from "./Screens/OTP";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <OTP />
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
