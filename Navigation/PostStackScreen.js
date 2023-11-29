import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pickup from "../Screens/Post/Pickup";
import Dropoff from "../Screens/Post/Dropoff";
import PickupTime from "../Screens/Post/PickupTime";
import DatePick from "../Screens/Post/DatePick";
import DropoffTime from "../Screens/Post/DropoffTime";

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
      <PostStack.Screen name="PickupTime" component={PickupTime} />
      <PostStack.Screen name="DropoffTime" component={DropoffTime} />
    </PostStack.Navigator>
  );
}

export default PostStackScreen;
