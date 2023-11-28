import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Dimensions,
  Keyboard
} from "react-native";
import React, { useState } from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import NextButton from "../Components/NextButton";
import citiesData from "../data";

const Pickup = ({ navigation, route }) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);

  const onNext = () => {
    if (inputValue === "") {
      return;
    }
    navigation.navigate("DatePick", { ...route.param, inputValue });
  };

  const loadOptions = (text) => {
    const filteredCities = citiesData.filter((city) =>
      city.name.toLowerCase().includes(text.toLowerCase())
    );
    setOptions(filteredCities);
  };

  const handleInputChange = (text) => {
    setInputValue(text);
    loadOptions(text);
    setOpen(true);
  };

  const onPress = (cityName) => {
    Keyboard.dismiss();
    setInputValue(cityName);
    setOpen(false);
  };

  const renderOption = ({ item }) => (
    <Pressable
      onPress={() => onPress(item.name)}
      android_ripple={{ color: "rgb(205,205,205)" }}
      style={styles.buttonContainer}>
      <Text style={styles.button}> {item.name}</Text>
    </Pressable>
  );

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
        Drop-off
      </Text>
      <View style={styles.inputContainer}>
        <Searchbar
          style={[
            open && {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
            {
              width: "90%",
              backgroundColor: "rgb(220, 220, 220)",
              marginTop: 18,
            },
          ]}
          placeholder="Enter the city name"
          onChangeText={handleInputChange}
          value={inputValue}
        />
        {open && (
          <FlatList
            style={styles.flatlist}
            data={options.slice(0, 5)}
            keyExtractor={(item) => item.id}
            renderItem={renderOption}
            contentContainerStyle={{ justifyContent: "flex-start" }}
            keyboardShouldPersistTaps="always"
          />
        )}
      </View>
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
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 48,
    paddingVertical: 12,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 0,
    backgroundColor: "rgb(230, 230, 230)",
    borderBottomColor: "rgba(100,100,100,0.12)",
    borderBottomWidth: 1,
  },
  button: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
  },
  flatList: {
    backgroundColor: "red",
  },
});

export default Pickup;
