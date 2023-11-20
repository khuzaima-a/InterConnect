import { Text, View, StyleSheet, Pressable } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";

const RideCard = ({ RideDetails }) => {
  return (
    <View style={styles.card}>
      <View style={styles.driver}>
        {RideDetails.driver.image ? (
          <Image source={RideDetails.driver.image} />
        ) : (
          <IonIcon name="person-circle" size={60} color="#b4b4b4" />
        )}
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {RideDetails.driver.name}
        </Text>
      </View>

      <View style={styles.ridedetails}>
        <View style={styles.source}>
          <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <Text style={{ fontWeight: "bold", paddingRight: 15, fontSize: 12 }}>
              {RideDetails.departureTime}
            </Text>
            <Text style={{ fontWeight: "bold" }}>{RideDetails.source}</Text>
          </View>
          <Text style={{ color: "red", fontWeight: "bold", fontSize: 15 }}>
            {RideDetails.fare}
          </Text>
        </View>

        <View style={styles.destination}>
          <Text style={{ fontWeight: "bold", paddingRight: 15, fontSize: 12 }}>{RideDetails.arrivalTime}</Text>
          <Text style={{ fontWeight: "bold" }}>{RideDetails.destination}</Text>
        </View>
        <View style={styles.car}>
          <IonIcon
            style={{ paddingLeft:3 }}
            name="car"
            size={24}
            color="#143758"
          />
          <Text>{RideDetails.vehicle.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F2F1F1",
    flexDirection: "row",
    width: "85%",
    marginHorizontal: 32,
    marginTop: 32,
    borderRadius: 15,
    elevation: 6,
  },
  driver: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 8,
  },
  ridedetails: {
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
