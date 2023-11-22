import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IonIcon from "react-native-vector-icons/Ionicons";
import { TimePicker } from "react-native-simple-time-picker";

const TimePick = () => {
  const insets = useSafeAreaInsets();

  const [hours, setHours] = useState(0)
  const [mints, setMints] = useState(0)

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
      <View style={styles.calendar}>
        <TimePicker
          selectedHours={hours}
          selectedMinutes={mints}
          onChange={(hours, minutes) => {
            setHours(hours);
            setMints(minutes);
          }}
        />
      </View>
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
