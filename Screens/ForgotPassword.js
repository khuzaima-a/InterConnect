import React, { useState } from 'react';
import { View, Text, Pressable, Keyboard ,TouchableWithoutFeedback , StyleSheet} from 'react-native';
import { TextInput, DefaultTheme } from "react-native-paper";

const ForgotPassword = () => {
          const [email, setEmail] = useState('');

            const theme = {
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                background: "rgb(243, 243, 243)",
              },
            };

          const handleSendCode = () => {
                    console.log('Sending OTP to:', email);
                    Keyboard.dismiss();
          };

          const handlePressOutside = () => {
            Keyboard.dismiss();
          };

          return (
            <TouchableWithoutFeedback onPress={handlePressOutside}>
              <View style={styles.container}>
                <View style={styles.innerContainer}>
                  <Text style={styles.heading}>Forgot{"\n"}Password?</Text>
                  <Text style={styles.description}>
                    Don't worry! It happens. Please enter your email, we will
                    send the OTP on this email.
                  </Text>
                  <TextInput
                    mode="outlined"
                    label="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    outlineColor="rgba(50, 50, 50, 0.15)"
                    activeOutlineColor="#1185BA"
                    theme={theme}
                  />
                  <Pressable
                    android_ripple={{ color: "#519fc2" }}
                    onPress={handleSendCode}
                    style={styles.buttonContainer}>
                    <Text style={styles.button}> Login</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableWithoutFeedback>
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
})

export default ForgotPassword;
