import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IonIcon from "react-native-vector-icons/Ionicons";

const TimePick = () => {
  const insets = useSafeAreaInsets();



  const [time, setTime] = useState("12:00");

  const handleTimeChange = (selectedTime) => {
    setDate(selectedTime);
  };

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <IonIcon
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
        At what time will you pick passengers up?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    marginTop: 30,
    backgroundColor: "#fff",
  },
  calendar: {
    width: "90%",
    alignSelf: "center",
    marginTop: 18,
  },
});

export default TimePick;
