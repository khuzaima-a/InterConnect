import React from "react";
import {
  View,
  Image,
  Dimensions,
} from "react-native";
import SearchCard from "../Components/SearchCard";

const FindRide = ({ navigation, route }) => {
          const screenWidth = Dimensions.get("window").width;
          const screenHeight = Dimensions.get("window").height;
          
          let data;
          route.params?.source ? data = route.params : data = null;
          return (
            <View style={{flex: 1}}>
              <Image
                style={{ width: screenWidth, height: screenHeight/2 }}
                source={require("../assets/FindRide.jpeg")}
              />
            <SearchCard navigation={navigation} data = {data} />
            </View>
          );
};

export default FindRide;
