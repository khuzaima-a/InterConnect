import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Keyboard,
  StyleSheet,
} from "react-native";
import { TextInput, DefaultTheme } from "react-native-paper";
import Users from '../Data/Users'
import { useAuth } from "../Context/AuthContext";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [emailError, setEmailError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [isInvalid, setIsInvalid] = useState(false);
   const { login } = useAuth();

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

  const handleLogin = () => {
    setEmailError(false);
    setPasswordError(false);
    setIsInvalid(false);

 if (email && password && validateEmail(email) & password.length >= 5) {
      const user = Users.find(
        (user) => user.email === email && user.password === password
      );

      if(user) {
        login(user)
        setEmail("");
        setPassword("");
      } else {
        setIsInvalid(true);
      }

      Keyboard.dismiss();
      return;
    }

    if (!email || !validateEmail(email)) {
      setEmailError(true);
    }
    if (!password || password.length < 5) {
      setPasswordError(true);
    }
  };


  return (
    <View style={styles.signup}>
      <View style={styles.ellipse}></View>
      <Text style={styles.heading}>Welcome{"\n"}Back</Text>

      <View style={styles.form}>
        {isInvalid && (
          <Text style={{ color: "red", textAlign: "center" }}>
            Invalid email or password
          </Text>
        )}
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          outlineColor={emailError ? "red" : "rgba(50, 50, 50, 0.15)"}
          activeOutlineColor={emailError ? "red" : "#1185BA"}
          theme={theme}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          outlineColor={passwordError ? "red" : "rgba(50, 50, 50, 0.15)"}
          activeOutlineColor={passwordError ? "red" : "#1185BA"}
          theme={theme}
        />

        <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotten}>Forgotten password?</Text>
        </Pressable>

        <Pressable
          android_ripple={{ color: "#519fc2" }}
          onPress={handleLogin}
          style={styles.buttonContainer}>
          <Text style={styles.button}> Login</Text>
        </Pressable>
      </View>

      <View>
        <Text style={styles.member}>Not a member yet?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.login}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signup: {
    width: "100%",
    height: "100%",
  },
  ellipse: {
    backgroundColor: "#1185BA",
    width: 400,
    height: 400,
    borderRadius: 200,
    position: "absolute",
    top: -185,
    left: -50,
    transform: [{ scaleX: 1.4 }, { rotate: "-20deg" }],
  },
  form: {
    marginTop: "20%",
    marginHorizontal: 30,
  },
  input: {
    marginVertical: 8,
  },
  buttonContainer: {
    marginTop: 8,
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
  member: {
    marginTop: 25,
    marginHorizontal: 32,
    color: "#1E1E1E",
    fontWeight: "bold",
    fontSize: 18,
  },
  login: {
    marginTop: 15,
    color: "#1185BA",
    marginHorizontal: 32,
    fontWeight: "bold",
    fontSize: 18,
  },
  heading: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    marginHorizontal: 32,
    marginTop: "25%",
  },
  forgotten: {
    color: "#1185BA",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
});

export default Login;
