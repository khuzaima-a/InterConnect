import React, { useState } from "react";
import { View, Text, Pressable, Keyboard, StyleSheet } from "react-native";
import { useUsers } from "../Context/UserContext";
import { TextInput, DefaultTheme } from "react-native-paper";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { users, setUsers } = useUsers();

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

  const handleSignup = () => {
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    if (
      name &&
      email &&
      password &&
      validateEmail(email) && 
      (password.length >= 5) &&
      name.length <= 15
    ) {
      const newUser = {
        id: Math.floor(Math.random() * 1000000000 + 1),
        name: name,
        email: email,
        gender: "",
        about:
          "Spreading smiles one ride at a time – your trusted journey to joy",
        dp: null,
        password: password,
        rides: [],
      };

      setUsers([...users, newUser]);
      navigation.navigate("Login");

      setName("");
      setEmail("");
      setPassword("");
      Keyboard.dismiss();
      return;
    }

    if (!name || name.length > 15) {
      setNameError(true);
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
      <Text style={styles.heading}>Create{"\n"}Account</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Name"
          value={name}
          onChangeText={setName}
          outlineColor={nameError ? "red" : "rgba(50, 50, 50, 0.15)"}
          activeOutlineColor={nameError ? "red" : "#1185BA"}
          theme={theme}
          required
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={setEmail}
          outlineColor={emailError ? "red" : "rgba(50, 50, 50, 0.15)"}
          activeOutlineColor={emailError ? "red" : "#1185BA"}
          theme={theme}
          keyboardType="email-address"
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
        <Pressable
          android_ripple={{ color: "#519fc2" }}
          onPress={handleSignup}
          style={styles.buttonContainer}>
          <Text style={styles.button}> Sign Up</Text>
        </Pressable>
      </View>

      <View>
        <Text style={styles.member}>Already a member?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.login}>Log in</Text>
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
    marginTop: 15,
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
});

export default Signup;
