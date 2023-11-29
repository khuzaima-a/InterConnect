import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "../Screens/Auth/ForgotPassword";
import Signup from "../Screens/Auth/Signup";
import OTP from "../Screens/Auth/OTP";
import ResetPassword from "../Screens/Auth/ResetPassword";
import Login from "../Screens/Auth/Login";

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
