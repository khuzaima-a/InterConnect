import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStackScreen";
import ChatStackScreen from "./ChatStackScreen";
import PostStackScreen from "./PostStackScreen";
import ProfileStackScreen from "./ProfileStackScreen";

const AppStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let rn = route.name;
          headerShown = false;

          if (rn === "HomeScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === "PostScreen") {
            return (
              <AntIcon
                name={focused ? "pluscircle" : "pluscircleo"}
                size={24}
                color={color}
              />
            );
          } else if (rn === "ChatScreen") {
            iconName = focused ? "chatbox-sharp" : "chatbox-outline";
          } else if (rn === "ProfileScreen") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "rgba(17, 133, 186, 0.93)",
        tabBarInactiveBackgroundColor: "#1185BA",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          bottom: 0,
          height: 50,
        },
      })}>
      <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
      <Tab.Screen name="PostScreen" component={PostStackScreen} />
      <Tab.Screen name="ChatScreen" component={ChatStackScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
