import React, { useState } from "react";
import { View, Pressable, StyleSheet, Dimensions } from "react-native";
import EIcon from "react-native-vector-icons/Entypo";
import MUIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("search");

  const handlePress = (tab) => {
          setActiveTab(tab);
  }

  return (
    <View style={styles.bar}>
      <Pressable
        onPress={() => handlePress("search")}
        style={[
          styles.iconContainer,
          activeTab === "search" ? styles.selected : styles.unselected,
        ]}>
        <IonIcon name="search" size={28} color="white" style={styles.icon} />
      </Pressable>

      <Pressable
        onPress={() => handlePress("add")}
        style={[
          styles.iconContainer,
          activeTab === "add" ? styles.selected : styles.unselected,
        ]}>
        <EIcon
          name="circle-with-plus"
          size={28}
          color="white"
          style={styles.icon}
        />
      </Pressable>

      <Pressable
        onPress={() => handlePress("chat")}
        style={[
          styles.iconContainer,
          activeTab === "chat" ? styles.selected : styles.unselected,
        ]}>
        <MUIcons
          name="message"
          size={28}
          color="white"
          style={[styles.margin, styles.icon]}
        />
      </Pressable>

      <Pressable
        onPress={() => handlePress("profile")}
        style={[
          styles.iconContainer,
          activeTab === "profile" ? styles.selected : styles.unselected,
        ]}>
        <IonIcon
          name="person-circle"
          size={30}
          color="white"
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#1185BA",
  },
  iconContainer: {
    width: Dimensions.get("window").width / 4,
    alignItems: "center",
  },
  icon: {
    paddingVertical: 12,
  },
  margin: {
    marginTop: 2,
  },
  selected: {
    borderTopColor: "white",
    borderTopWidth: 3,
  },
  unselected: {
    borderTopColor: "transparent",
    borderTopWidth: 3,
  },
});

export default TabBar;
