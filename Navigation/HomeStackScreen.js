import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FindRide from "../Screens/Home/FindRide";
import Feed from "../Screens/Home/Feed";
import RideDetails from "../Screens/Home/RideDetails";

function HomeStackScreen() {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      initialRouteName="FindRide"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="FindRide" component={FindRide} />
      <HomeStack.Screen name="Feed" component={Feed} />
      <HomeStack.Screen name="RideDetails" component={RideDetails} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
