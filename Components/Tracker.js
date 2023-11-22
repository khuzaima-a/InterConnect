import { View, Text, StyleSheet, Pressable} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

const Tracker = (props) => {
  const handlePress = () => {
    props.navigation.navigate("FindRide", {
      source: props.source,
      destination: props.destination,
      date: props.date,
      passengers: props.passengers,
    });
  }

  return (
    <Pressable
      android_ripple={{ color: "rgb(211, 211, 211)" }}
      onPress={handlePress}
      style={styles.tracker}>
      <FAIcon name="angle-left" size={25} color={"rgba(102, 102, 102, 0.7)"} />

      <View style={{ gap: 4 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={{ fontSize: 12 }}>{props.source}</Text>
          <Fontisto
            name="arrow-right-l"
            size={20}
            color="rgba(79, 76, 76, 0.7)"
          />
          <Text style={{ fontSize: 12 }}>{props.destination}</Text>
        </View>
        <Text style={{ fontSize: 11 }}>
          {props.date}, {props.passengers}{" "}
          {props.passengers > 1 ? "passengers" : "passenger"}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tracker: {
          width: "85%",
    backgroundColor: "#F2F1F1",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 9,
    paddingTop: 4,
    gap: 16,
    borderRadius: 16,
    borderColor: "rgba(0,0,0,0.25)",
    borderWidth: 1,
  },
});

export default Tracker;
