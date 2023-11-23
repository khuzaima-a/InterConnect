import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "../Screens/ForgotPassword";
import Signup from "../Screens/Signup";
import OTP from "../Screens/OTP";
import ResetPassword from "../Screens/ResetPassword";
import Login from "../Screens/Login";

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
