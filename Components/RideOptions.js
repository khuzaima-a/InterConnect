import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";

const RideOptions = ({ selected, setSelected, vehicles }) => {
  return (
    <View style={styles.options}>
      <Pressable
        style={[
          styles.option,
          selected === "All" ? styles.selected : styles.unselected,
        ]}
        onPress={() => setSelected("All")}>
        <Text style={styles.text}>All</Text>
        <Text>{vehicles.All}</Text>
      </Pressable>
      <Pressable
        style={[
          styles.option,
          selected === "Car" ? styles.selected : styles.unselected,
        ]}
        onPress={() => setSelected("Car")}>
        <Text style={styles.text}>Car</Text>
        <Text>{vehicles.Car}</Text>
      </Pressable>
      <Pressable
        style={[
          styles.option,
          selected === "Bike" ? styles.selected : styles.unselected,
        ]}
        onPress={() => setSelected("Bike")}>
        <Text style={styles.text}>Bike</Text>
        <Text>{vehicles.Bike}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  option: {
    width: Dimensions.get("window").width / 3,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  selected: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,1)",
  },
  unselected: {
    borderBottomColor: "#e0e0e0",
  },
});

export default RideOptions;
