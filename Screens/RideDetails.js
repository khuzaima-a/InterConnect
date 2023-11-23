import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useRides } from "../Context/RidesContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RideDetails = ({ route, navigation }) => {
  const { rides } = useRides();
  const ride = rides.filter((ride) => ride.id === route.params.id)[0];

  ride.date = "Tue 10 October";
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <ScrollView style={{ width: "100%", flex: 1 }}>
        <View style={styles.container}>
          <View style={{ marginHorizontal: 12 }}>
            <IonIcon
              onPress={() => {
                navigation.goBack();
              }}
              name="arrow-back"
              size={30}
              color="#1185BA"
              style={{ marginHorizontal: 3 }}
            />
            <Text style={styles.date}> {ride.date}</Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 32,
                gap: 15,
                alignItems: "center",
                marginHorizontal: 6,
              }}>
              <View style={{ gap: 48 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {ride.departureTime}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {ride.arrivalTime}
                </Text>
              </View>

              <View style={{ alignItems: "center" }}>
                <View style={styles.circle}></View>
                <View style={styles.line}></View>
                <View style={styles.circle}></View>
              </View>

              <View style={{ gap: 48 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {ride.source}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {ride.destination}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.HLine}></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 18,
              marginTop: 24,
            }}>
            <Text>Total price for 1 passenger</Text>
            <Text style={{ color: "red", fontWeight: "bold" }}>
              {ride.fare} PKR
            </Text>
          </View>
          <View style={styles.HLine}></View>

          <View style={styles.driver}>
            <Text
              style={{ fontSize: 15, color: "#1185BA", fontWeight: "bold" }}>
              Contact {ride.driver.name}
            </Text>
            <IonIcon name="person-circle" size={40} color="#9cadb8" />
          </View>

          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "rgb(191,191,191)",
              marginTop: 12,
            }}></View>

          <Text style={styles.seats}>
            Max. {ride.vehicle.seats} seats are available
          </Text>

          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "rgb(191,191,191)",
              marginTop: 24,
            }}></View>

          <View style={styles.car}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", paddingBottom: 8 }}>
              {ride.vehicle.name}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              {ride.vehicle.color}
            </Text>
          </View>
        </View>
      </ScrollView>

      <Pressable
        android_ripple={{ color: "#519fc2" }}
        style={styles.buttonContainer}>
        <Text style={styles.button}> Book Now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    width: "100%",
    paddingBottom: 120,
  },
  date: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 14,
  },
  line: {
    width: 1,
    height: 56,
    backgroundColor: "black",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
  },
  HLine: {
    width: "100%",
    height: 6,
    backgroundColor: "rgb(191,191,191)",
    marginTop: 24,
  },
  driver: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 12,
  },
  seats: {
    marginHorizontal: 18,
    marginTop: 24,
    fontSize: 13,
  },
  car: {
    marginHorizontal: 18,
    marginTop: 30,
  },
  buttonContainer: {
    position: "absolute",
    paddingVertical: 12,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 10,
    backgroundColor: "#1185BA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginBottom: 16,
    bottom: 0,
    alignSelf: "center",
  },
  button: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default RideDetails;
