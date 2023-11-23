import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Keyboard,
  StyleSheet,
} from "react-native";
import { TextInput, DefaultTheme } from "react-native-paper";
import Users from "../Data/Users"

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isInValid, setIsInValid] = useState(false);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(243, 243, 243)",
    },
  };

   const validateEmail = (email) => {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
   };

  const handleSendCode = () => {
    setEmailError(false);
    setIsInValid(false);

    if (email && validateEmail(email)) {
      const user = Users.find(
        (user) => user.email === email
      );

      if(user) {
        navigation.navigate("OTP", {
          email: email,
        });
        setEmail("");
      } else {
        setIsInValid(true)
      }
      Keyboard.dismiss();
    } else {
      setEmailError(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Forgot{"\n"}Password?</Text>
        <Text style={styles.description}>
          Don't worry! It happens. Please enter your email, we will send the OTP
          on this email.
        </Text>
        {isInValid && (
          <Text style={{ color: "red", textAlign: "center", marginBottom: 24 }}>
            Email does'nt exist.
          </Text>
        )}
        <TextInput
          mode="outlined"
          label="Enter your email"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          outlineColor={emailError ? "red" : "rgba(50, 50, 50, 0.15)"}
          activeOutlineColor={emailError ? "red" : "#1185BA"}
          theme={theme}
        />
        <Pressable
          android_ripple={{ color: "#519fc2" }}
          onPress={handleSendCode}
          style={styles.buttonContainer}>
          <Text style={styles.button}> Verify</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 30,
  },
  innerContainer: {
    flex: 1,
    marginTop: 170,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#1185BA",
  },
  description: {
    color: "rgb(91,88,88)",
    fontSize: 16,
    marginBottom: 24,
  },
  buttonContainer: {
    marginTop: 24,
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
});

export default ForgotPassword;
