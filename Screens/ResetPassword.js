import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Keyboard,
  Image,
  StyleSheet,
} from "react-native";
import { TextInput, DefaultTheme } from "react-native-paper";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(243, 243, 243)",
    },
  };

  const handleSubmit = () => {
    setPassword("");
    setConfirmPassword("");
    Keyboard.dismiss();
  };

  return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/ResetPassword.png")}
        />
        <Text style={styles.heading}>Set Your Password</Text>
        <Text style={styles.description}>
          In order to keep your account safe you need to create a strong
          password
        </Text>
        <View style={styles.form}>
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

          <TextInput
            style={styles.input}
            mode="outlined"
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            outlineColor="rgba(50, 50, 50, 0.15)"
            activeOutlineColor="#1185BA"
            theme={theme}
          />

          <Pressable
            android_ripple={{ color: "#519fc2" }}
            onPress={handleSubmit}
            style={styles.buttonContainer}>
            <Text style={styles.button}> Submit</Text>
          </Pressable>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    marginBottom: "20%"
  },
  form: {
    marginHorizontal: 30,
  },
  input: {
    marginVertical: 8,
  },
  buttonContainer: {
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#1185BA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  button: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  heading: {
    color: "#1185BA",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 32,
    marginBottom: 24
  },
  description: {
    color: "rgba(0,0,0,0.4)",
    lineHeight: 24,
    fontSize: 16,
    marginHorizontal: 32,
    marginBottom: 16
  },
  image: {
    alignSelf: "center",
    marginBottom: 24
  },
});

export default ResetPassword;
