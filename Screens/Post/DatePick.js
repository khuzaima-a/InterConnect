import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IonIcon from "react-native-vector-icons/Ionicons";
import NextButton from "../../Components/NextButton";

const DatePick = ({ navigation, route }) => {
          const insets = useSafeAreaInsets();

          const today = new Date();
          const startDate = getFormatedDate(
            today.setDate(today.getDate()),
            "YYYY/MM/DD"
          );
          const [date, setDate] = useState(startDate);

          const onNext = () => {
            navigation.navigate('PickupTime', { ...route.params, date });
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
                  When are you going?
                </Text>
                <DatePicker
                  options={{
                    textHeaderColor: "#1185BA",
                    mainColor: "#1185BA",
                    textSecondaryColor: "#1185BA",
                  }}
                  mode="calendar"
                  selected={date}
                  minimumDate={startDate}
                  onDateChange={(selectedDate) => setDate(selectedDate)}
                  style={styles.calendar}
                />
                <NextButton onPress={onNext} />
              </View>
            );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    marginTop: 30,
    backgroundColor: "#fff",
  },
  calendar: {
          width: "90%",
          alignSelf: "center",
          marginTop: 18,
  }
});

export default DatePick;