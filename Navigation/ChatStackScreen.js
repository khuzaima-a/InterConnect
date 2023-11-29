import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../Screens/Chat/Chat";

function ChatStackScreen() {
  const ChatStack = createStackNavigator();
  return (
    <ChatStack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
      }}>
      <ChatStack.Screen name="Chat" component={Chat} />
    </ChatStack.Navigator>
  );
}

export default ChatStackScreen;
