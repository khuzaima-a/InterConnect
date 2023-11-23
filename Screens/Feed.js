import React, { useEffect, useState } from "react";
import Tracker from "../Components/Tracker";
import RideOptions from "../Components/RideOptions";
import RideCard from "../Components/RideCard";
import { useRides } from '../Context/RidesContext'
import { View, FlatList } from "react-native";
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Feed = props => {
  const { rides } = useRides();
  const insets = useSafeAreaInsets();
  
  const [selected, setSelected] = useState("All");
  const [vehicles, setVehicles] = useState({});

  const { source, destination, date, passengers } = props.route.params;

  const filteredRides = rides.filter((ride) => {
    const sourceMatch =
      !source || ride.source.toLowerCase().includes(source.toLowerCase());
    const destinationMatch =
      !destination ||
      ride.destination.toLowerCase().includes(destination.toLowerCase());
    const passengersMatch = !passengers || ride.vehicle.seats >= passengers;

    return sourceMatch && destinationMatch && passengersMatch;
  });

  useEffect(() => {
    setVehicles({
      All: filteredRides.length,
      Car: filteredRides.filter((Ride) => Ride.vehicle.type === "Car").length,
      Bike: filteredRides.filter((Ride) => Ride.vehicle.type === "Bike").length,
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
        source={source}
        destination={destination}
        passengers={passengers}
        date={date}
        navigation={props.navigation}
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
            ? filteredRides
            : filteredRides.filter((ride) => ride.vehicle.type === selected)
        }
        renderItem={({ item }) => <RideCard key={item.id} RideInfo={item} navigation={props.navigation} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Feed;
