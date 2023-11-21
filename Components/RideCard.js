import { Text, View, StyleSheet, Pressable } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import RideDetails from "../Screens/RideDetails"
import { useNavigation } from "@react-navigation/native";

const RideCard = ({ RideInfo }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("RideDetails", { id: RideInfo.id });
  };
  
  return (
    <Pressable
      android_ripple={{ color: "rgb(211, 211, 211)" }}
      onPress={handlePress}
      style={styles.card}>
      <View style={styles.driver}>
        {RideInfo.driver.image ? (
          <Image source={RideInfo.driver.image} />
        ) : (
          <IonIcon name="person-circle" size={60} color="#b4b4b4" />
        )}
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {RideInfo.driver.name}
        </Text>
      </View>

      <View style={styles.RideInfo}>
        <View style={styles.source}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{ fontWeight: "bold", paddingRight: 15, fontSize: 12 }}>
              {RideInfo.departureTime}
            </Text>
            <Text style={{ fontWeight: "bold" }}>{RideInfo.source}</Text>
          </View>
          <Text style={{ color: "red", fontWeight: "bold", fontSize: 15 }}>
            {RideInfo.fare}
          </Text>
        </View>

        <View style={styles.destination}>
          <Text style={{ fontWeight: "bold", paddingRight: 15, fontSize: 12 }}>
            {RideInfo.arrivalTime}
          </Text>
          <Text style={{ fontWeight: "bold" }}>{RideInfo.destination}</Text>
        </View>
        <View style={styles.car}>
          {RideInfo.vehicle.type === "Car" ? (
            <IonIcon
              style={{ paddingLeft: 3 }}
              name="car"
              size={24}
              color="#143758"
            />
          ) : (
            <Fontisto
              style={{ paddingLeft: 3 }}
              name="motorcycle"
              size={24}
              color="#143758"
            />
          )}
          <Text>{RideInfo.vehicle.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgb(242, 241, 241)",
    flexDirection: "row",
    width: "87%",
    alignSelf: "center",
    marginVertical: 16,
    borderRadius: 15,
    elevation: 6,
  },
  driver: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 8,
  },
  RideInfo: {
    gap: 14,
    justifyContent: "center",
    paddingVertical: 14,
    flex: 1,
    paddingRight: 20,
  },
  source: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  destination: {
    flexDirection: "row",
    alignItems: "center",
  },
  car: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
});

export default RideCard;
