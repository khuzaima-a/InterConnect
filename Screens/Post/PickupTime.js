import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IonIcon from "react-native-vector-icons/Ionicons";
import NextButton from "../../Components/NextButton";
import TimePick from "../../Components/TimePick";

const PickupTime = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const [date, setDate] = useState(new Date());

  const onPress = () => {
    const pickupTime = date
            .toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
            .slice(0, -3)
    navigation.navigate("DropoffTime", { ...route.params, pickupTime });
  }

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
        At what time will you pick passengers up?
      </Text>
      <TimePick date={date} setDate={setDate} />
      <NextButton onPress={onPress} />
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
});

export default PickupTime;
