import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pickup from "../Screens/Pickup";
import Dropoff from "../Screens/Dropoff";
import TimePick from "../Screens/TimePick";
import DatePick from "../Screens/DatePick";

function PostStackScreen() {
  const PostStack = createStackNavigator();
  return (
    <PostStack.Navigator
      initialRouteName="Pickup"
      screenOptions={{
        headerShown: false,
      }}>
      <PostStack.Screen name="Pickup" component={Pickup} />
      <PostStack.Screen name="Dropoff" component={Dropoff} />
      <PostStack.Screen name="DatePick" component={DatePick} />
      <PostStack.Screen name="TimePick" component={TimePick} />
    </PostStack.Navigator>
  );
}

export default PostStackScreen;
