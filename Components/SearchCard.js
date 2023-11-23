import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Pressable,
  Modal,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import FAIcon from "react-native-vector-icons/FontAwesome";

const SearchCard = ({ navigation, data }) => {
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD"
  );

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(startDate);
  const [passengersModal, setPassengerModal] = useState(false);
  const [passengers, setPassengers] = useState(1);

  const setValues = useCallback(() => {
    if (data !== null) {
      setSource(data.source);
      setDestination(data.destination);
      setDate(data.date);
      setPassengers(data.passengers);
    }
  }, [data]);

  useEffect(() => {
    setValues();
  }, [setValues]);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setOpen(false);
  };

  const handleSearch = () => {
    if (source.trim() === "" || destination.trim() === "") {
      return;
    }
    navigation.navigate("Feed", {
      source: source.trim(),
      destination: destination.trim(),
      date: date,
      passengers: passengers,
    });

    setDate(startDate);
    setSource("");
    setDestination("");
    setPassengers(1);
  };

  const handlePress = (num) => {
    setPassengers(num);
    setPassengerModal(false);
  };

  return (
    <View style={{ ...styles.container, marginHorizontal: 32, paddingTop: 8 }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 36,
          }}>
          <FAIcon name="circle-o" size={20} />
          <TextInput
            placeholder="Leaving from"
            value={source}
            onChangeText={(text) => setSource(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.line}></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 36,
          }}>
          <FAIcon name="circle-o" size={20} />
          <TextInput
            placeholder="Going to"
            value={destination}
            onChangeText={(text) => setDestination(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.line}></View>
      </View>

      <View
        style={{
          marginHorizontal: 32,
          marginVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <View>
          <Pressable
            style={{ ...styles.datePicker, paddingRight: 70 }}
            onPress={() => setOpen(true)}>
            <IonIcon name="calendar-outline" size={25} color="black" />
            <Text style={{ paddingLeft: 16, fontWeight: "bold" }}>
              {date.substring(5)}
            </Text>
          </Pressable>

          <Modal animationType="slide" transparent={true} visible={open}>
            <View style={styles.centered}>
              <View style={styles.modalContainer}>
                <DatePicker
                  options={{
                    textHeaderColor: "#1185BA",
                    mainColor: "#1185BA",
                    textSecondaryColor: "#1185BA",
                  }}
                  mode="calendar"
                  selected={date}
                  minimumDate={startDate}
                  onDateChange={handleDateChange}
                />
                <Pressable onPress={() => setOpen(false)} style={styles.close}>
                  <Text style={styles.button}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.passengers}>
          <Pressable
            onPress={() => setPassengerModal(true)}
            style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcon
              name="person-outline"
              size={30}
              color="black"
              style={{ paddingRight: 5 }}
            />
            <Text>{passengers}</Text>
          </Pressable>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={passengersModal}>
          <View style={styles.centered}>
            <View style={{ ...styles.modalContainer, width: "80%" }}>
              <View style={styles.nums}>
                <Pressable
                  onPress={() => handlePress(1)}
                  style={[styles.num, passengers === 1 ? styles.active : null]}>
                  <Text style={passengers === 1 ? { color: "white" } : null}>
                    1
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => handlePress(2)}
                  style={[styles.num, passengers === 2 ? styles.active : null]}>
                  <Text style={passengers === 2 ? { color: "white" } : null}>
                    2
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => handlePress(3)}
                  style={[styles.num, passengers === 3 ? styles.active : null]}>
                  <Text style={passengers === 3 ? { color: "white" } : null}>
                    3
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => handlePress(4)}
                  style={[styles.num, passengers === 4 ? styles.active : null]}>
                  <Text style={passengers === 4 ? { color: "white" } : null}>
                    4
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <Pressable
        android_ripple={{ color: "#519fc2" }}
        onPress={handleSearch}
        style={styles.buttonContainer}>
        <Text style={styles.button}> Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F1F1",
    overflow: "hidden",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    position: "relative",
    top: -50,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  input: {
    backgroundColor: "rgba(0,0,0,0)",
    borderBottomWidth: 0,
    paddingLeft: 20,
    fontSize: 16,
    paddingVertical: 16,
    width: "90%",
  },
  line: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: 1,
    marginHorizontal: 32,
  },
  verticalLine: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    width: 1,
  },
  datePicker: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  passengers: {
    marginRight: 10,
  },
  buttonContainer: {
    paddingVertical: 16,
    backgroundColor: "#1185BA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  button: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  close: {
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: "#1185BA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  nums: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 16,
  },
  num: {
    backgroundColor: "rgba(100,100,100,0.15)",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  active: {
    backgroundColor: "#1185BA",
  },
});

export default SearchCard;
