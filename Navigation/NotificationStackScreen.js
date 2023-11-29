import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../Screens/Chat/Chat";

function NotificationStackScreen() {
  const NotificationStack = createStackNavigator();
  return (
    <NotificationStack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
      }}>
      <NotificationStack.Screen name="Chat" component={Chat} />
    </NotificationStack.Navigator>
  );
}

export default NotificationStackScreen;
