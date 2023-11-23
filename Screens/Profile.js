import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Users from "../Data/Users";
import Rides from "../Data/Rides";
import IonIcon from "react-native-vector-icons/Ionicons";
import RideCard from "../Components/RideCard";
import { useAuth } from '../Context/AuthContext';

const Profile = ({ navigation }) => {
  const { loggedInUser } = useAuth();
  const user = Users.filter((user) => user.id === loggedInUser.id)[0];
  const rides = Rides.filter((ride) => ride.driver.id === loggedInUser.id);
  const insets = useSafeAreaInsets();

  const renderHeader = () => (
    <View style={styles.container}>
      <View style={styles.nameDp}>
        <View style={styles.name}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>{user.name}</Text>
          <Text style={{ color: "rgba(0,0,0,0.7)" }}>{user.gender}</Text>
        </View>
        <View style={styles.Dp}>
          {user.dp ? (
            <Image source={user.dp} />
          ) : (
            <IonIcon name="person-circle" size={100} color="rgba(0,0,0,0.3)" />
          )}
        </View>
      </View>

      <View
        style={{
          width: "80%",
          marginTop: 12,
          marginBottom: 18,
        }}>
        <Text style={{ color: "#1185BA", fontWeight: "bold", fontSize: 15 }}>
          Edit profile
        </Text>
      </View>

      <View style={styles.line}></View>
      <View style={{ width: "80%", marginTop: 18, marginBottom: 18 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 8 }}>
          About you
        </Text>
        <Text style={{ color: "#575656", fontSize: 13, lineHeight: 26 }}>
          {user.about}
        </Text>
      </View>
      <View style={styles.line}></View>

      <Text
        style={{
          width: "80%",
          fontSize: 17,
          fontWeight: "bold",
          marginBottom: 8,
          marginTop: 18,
        }}>
        Your rides
      </Text>
    </View>
  );

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      ListHeaderComponent={renderHeader}
      data={rides}
      renderItem={({ item }) => <RideCard key={item.id} RideInfo={item} navigation={navigation} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 24,
  },
  nameDp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  name: {
    gap: 10,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0,0,0,0.15)",
  },
});

export default Profile;
