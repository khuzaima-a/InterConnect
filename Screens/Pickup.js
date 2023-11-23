import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import NextButton from "../Components/NextButton";

const Pickup = ({ navigation }) => {
  const [source, setSource] = useState("");

  const onNext = () => {
    if (source === "") {
      return;
    }
    navigation.navigate("Dropoff", { source });
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
        onChangeText={(text) => setSource(text)}
        value={source}
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
