import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RideDetails from "../Screens/Home/RideDetails";
import Profile from "../Screens/Profile/Profile";
import EditProfile from "../Screens/Profile/EditProfile";

function ProfileStackScreen() {
  const ProfileStack = createStackNavigator();
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="RideDetails" component={RideDetails} />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;
