import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput, DefaultTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Fontisto";
import { useUsers} from '../Context/UserContext';

function EditProfile({ navigation, route }) {
  const [about, setAbout] = useState(route.params?.user.about);
  const [dpUrl, setDpUrl] = useState(route.params?.user.dp)
  const [gender, setGender] = useState(route.params?.user.gender)
  const [aboutError, setAboutError] = useState(false);
  const { users, setUsers } = useUsers();
  const insets = useSafeAreaInsets();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(243, 243, 243)",
    },
  };

  const handleSubmit = () => {
          setAboutError(false);
          if(about.length < 10) {
                    setAboutError(true);
                    return;
          }

          setUsers(users.map((user) => {
                    if(user.id === route.params?.user.id) {
                              return {
                                        ...user,
                                        about: about,
                                        gender: gender,
                                        dp: dpUrl
                              }
                    }  
                    else {
                              return user;
                    }
          }))

          navigation.goBack();
  }

  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        marginTop: 60,
        alignItems: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Text style={styles.heading}>Edit Profile</Text>
      {
                        aboutError && (
                                <Text style={{ color: "red", fontSize: 14, alignSelf: "center", marginBottom: 8 }}>About should be atleast 10 characters </Text>
                        )
      }
      <TextInput
        style={styles.input}
        numberOfLines={2}
        mode="outlined"
        label="About"
        value={about}
        onChangeText={setAbout}
        outlineColor="rgba(50, 50, 50, 0.15)"
        activeOutlineColor="#1185BA"
        theme={theme}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="DP URL"
        value={dpUrl}
        onChangeText={setDpUrl}
        outlineColor="rgba(50, 50, 50, 0.15)"
        activeOutlineColor="#1185BA"
        theme={theme}
      />
      <View style={{ flexDirection: "row", gap: 16, marginTop: 24 }}>
        <Pressable
          style={styles.icon}
          onPress={() => setGender("Male")}
          android_ripple={{ color: "rgb(180,180,180)" }}>
          <Icon
            name="male"
            size={40}
            color={gender === "Male" ? "#519fc2" : "rgba(0,0,0,0.5)"}
          />
        </Pressable>

        <Pressable
          style={styles.icon}
          onPress={() => setGender("Female")}
          android_ripple={{ color: "rgb(180,180,180)" }}>
          <Icon
            name="female"
            size={40}
            color={gender === "Female" ? "#519fc2" : "rgba(0,0,0,0.5)"}
          />
        </Pressable>
      </View>

      <Pressable
        onPress={handleSubmit}
        android_ripple={{ color: "#519fc2" }}
        style={styles.buttonContainer}>
        <Text style={styles.button}> Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 16,
    width: "85%",
  },
  icon: {
    backgroundColor: "rgb(220,220,220)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  heading: {
    color: "#1185BA",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  buttonContainer: {
    paddingVertical: 12,
    width: "85%",
    borderRadius: 10,
    backgroundColor: "#1185BA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginTop: 32,
    alignSelf: "center",
  },
  button: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default EditProfile;
