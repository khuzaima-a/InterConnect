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
import { useUsers } from '../../Context/UserContext';

const ResetPassword = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null)
  const { users, setUsers } = useUsers();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(243, 243, 243)",
    },
  };

  const handleSubmit = () => {
    setError(null);
    Keyboard.dismiss();
    if(password.length < 5) {
      setError("Password should be atleast 5 characters")
      return;
    }
    if(password !== confirmPassword) {
      setError("Password and confirm password should be same")
      return;
    }

    setUsers(users.map((user) => {
      if(user.email === route.params?.email) {
        return {
          ...user,
          password: password
        }
      }
      else {
        return user;
      }
    }))

    navigation.navigate("Login");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/ResetPassword.png")}
      />
      <Text style={styles.heading}>Set Your Password</Text>
      <Text style={styles.description}>
        In order to keep your account safe you need to create a strong password
      </Text>
      {error && (
        <Text style={{ color: "red", textAlign: "center", marginBottom: 16 }}>
          {error}
        </Text>
      )}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          outlineColor="rgba(50, 50, 50, 0.15)"
          activeOutlineColor="#1185BA"
          theme={theme}
          left={<TextInput.Icon icon="lock" size={22} color="rgb(80,80,80)" />}
          right={
            <TextInput.Icon
              onPress={() => setShowPassword(!showPassword)}
              icon={showPassword ? "eye-off" : "eye"}
              size={20}
              color="rgb(80,80,80)"
            />
          }
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
          left={<TextInput.Icon icon="lock" size={22} color="rgb(80,80,80)" />}
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
