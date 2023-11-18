import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput, DefaultTheme } from "react-native-paper";
import styles from "./Styles/Signup"

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(243, 243, 243)",
    },
  };

  const handleSignup = () => {
    setName("");
    setEmail("");
    setPassword("");
    Keyboard.dismiss();
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View style={styles.signup}>
        <View style={styles.ellipse}></View>
        <Text style={styles.heading}>Create{"\n"}Account</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={setName}
            outlineColor="rgba(50, 50, 50, 0.15)"
            activeOutlineColor="#1185BA"
            theme={theme}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={setEmail}
            outlineColor="rgba(50, 50, 50, 0.15)"
            activeOutlineColor="#1185BA"
            theme={theme}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            outlineColor="rgba(50, 50, 50, 0.15)"
            activeOutlineColor="#1185BA"
            theme={theme}
          />
          <Pressable
            android_ripple={{ color: "#519fc2" }}
            onPress={handleSignup}
            style={styles.buttonContainer}>
            <Text style={styles.button}> Sign Up</Text>
          </Pressable>
        </View>

        <View>
          <Text style={styles.member}>Already a member?</Text>
          <Pressable>
            <Text style={styles.login}>Log in</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
