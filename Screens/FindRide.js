import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import SearchCard from "../Components/SearchCard";

const FindRide = () => {
          const screenWidth = Dimensions.get("window").width;
          const screenHeight = Dimensions.get("window").height;

          return (
            <View style={{flex: 1}}>
              <Image
                style={{ width: screenWidth, height: screenHeight/2 }}
                source={require("../assets/FindRide.jpeg")}
              />
              <SearchCard />
            </View>
          );
};

const styles = StyleSheet.create({
//   image: {
//     alignSelf: "center",
//     width: ,
//     height: 500,
//     marginBottom: 24,
//   },
});

export default FindRide;
