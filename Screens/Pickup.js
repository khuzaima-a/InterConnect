import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { useAuth } from "../Context/AuthContext"
import NextButton from "../Components/NextButton";

const Pickup = ({ navigation }) => {
  const { loggedInUser } = useAuth();
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      id: Math.floor(Math.random() * 100000000000 + 1),
      source: "",
      destination: "",
      date: "",
      departureTime: "",
      arrivalTime: "",
      vehicle: {
        name: "",
        color: "",
        type: "",
        seats: 0,
      },
      driver: {
        id: loggedInUser.id,
        name: loggedInUser.name,
        image: loggedInUser.image,
      },
      fare: 0,
    });
  }, [])

  const onNext = () => {
    if (search === "") {
      return;
    }
    setData({ ...data, source: search });
    navigation.navigate("Dropoff", { data });
  }

  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        ...styles.container,
      }}>
      <IonIcon
      onPress={() => navigation.goBack()}
        name="arrow-back"
        size={30}
        color="#1185BA"
        style={{ marginHorizontal: 18, marginBottom: 18 }}
      />
      <Text
        style={{
          marginHorizontal: 18,
          fontSize: 24,
          fontWeight: "bold",
          paddingLeft: 10,
          lineHeight: 40,
        }}>
        Pick-up
      </Text>
      <Searchbar
        style={{
          width: "90%",
          alignSelf: "center",
          backgroundColor: "rgba(84, 84, 84, 0.12)",
          marginTop: 18,
        }}
        placeholder="Enter the full address"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <NextButton onPress={onNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    marginTop: 30,
  }
});

export default Pickup;
