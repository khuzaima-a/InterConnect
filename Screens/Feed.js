import React, { useEffect, useState } from "react";
import Tracker from "../Components/Tracker";
import RideOptions from "../Components/RideOptions";
import RideCard from "../Components/RideCard";
import Rides from "../Data/Rides";
import { View, FlatList, Pressable } from "react-native";
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Feed = () => {
  const [selected, setSelected] = useState("All");
  const [vehicles, setVehicles] = useState({});

  const insets = useSafeAreaInsets();

  useEffect(() => {
    setVehicles({
      All: Rides.length,
      Car: Rides.filter((Ride) => Ride.vehicle.type === "Car").length,
      Bike: Rides.filter((Ride) => Ride.vehicle.type === "Bike").length,
    });
  }, [])


  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        marginTop: 16,
        alignItems: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Tracker
        source="Lahore, Pk"
        destination="Islamabad, Pk"
        passengers={1}
        date="11/21"
      />
      <RideOptions
        selected={selected}
        setSelected={setSelected}
        vehicles={vehicles}
      />

      <FlatList
        style={{ width: "100%" }}
        data={
          selected === "All"
            ? Rides
            : Rides.filter((ride) => ride.vehicle.type === selected)
        }
        renderItem={({ item }) => <RideCard key={item.id} RideInfo={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Feed;
