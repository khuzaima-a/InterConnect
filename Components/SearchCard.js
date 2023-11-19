import React, { useState } from "react";
import { View, Button, Pressable, Modal, StyleSheet, Text } from "react-native";
import { TextInput, DefaultTheme } from "react-native-paper";
import DatePicker from "react-native-modern-datepicker";

const SearchCard = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
          setDate(selectedDate);
          setOpen(false)
  }

  return (
    <View style={{ flex: 1, marginHorizontal: 32 }}>
      <View>
        <TextInput
          label="Leaving from"
          left={<TextInput.Icon icon="circle" color={"rgba(0,0,0,0.5)"} />}
          value={source}
          onChangeText={(text) => setSource(text)}
        />
      </View>
      <View>
        <TextInput
          label="Going to"
          left={<TextInput.Icon icon="circle" color={"rgba(0,0,0,0.5)"} />}
          value={destination}
          onChangeText={(text) => setDestination(text)}
        />
      </View>
      <Pressable onPress={() => setOpen(true)}>
        <Text>Select Date</Text>
      </Pressable>

      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.centered}>
          <View style={styles.modalContainer}>
            <DatePicker
              mode="date"
              selected={date}
              onDateChange={handleDateChange}
            />
            <Pressable onPress={() => setOpen(false)}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: "90%",
    paddingHorizontal:  20,
    paddingVertical: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default SearchCard;
