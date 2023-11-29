import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";

const TimePick = ({ date, setDate }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  return (
    <View style={{ width: "90%", alignSelf: "center", marginTop: 24 }}>
      <Pressable
        onPress={() => setShow(true)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "rgba(114, 114, 114, 0.3)",
        }}>
        <Text style={{ fontSize: 36, fontWeight: "bold", paddingVertical: 4 }}>
          {date
            .toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
            .slice(0, -3)}
        </Text>
        <IonIcon
          style={{ position: "absolute", right: 12 }}
          name="time-outline"
          size={30}
          color="rgba(0,0,0,0.4)"
        />
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default TimePick;
