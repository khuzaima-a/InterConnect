import { createStackNavigator } from "@react-navigation/stack";
import FindRide from "../Screens/FindRide";
import Feed from "../Screens/Feed";
import RideDetails from "../Screens/RideDetails";
import Profile from "../Screens/Profile";
import Pickup from "../Screens/Pickup";
import Dropoff from "../Screens/Dropoff";
import TimePick from "../Screens/TimePick";
import DatePick from "../Screens/DatePick";

const AppStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="FindRide"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FindRide" component={FindRide} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="RideDetails" component={RideDetails} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Pickup" component={Pickup} />
      <Stack.Screen name="Dropoff" component={Dropoff} />
      <Stack.Screen name="DatePick" component={DatePick} />
      <Stack.Screen name="TimePick" component={TimePick} />
    </Stack.Navigator>
  );
};

export default AppStack;
