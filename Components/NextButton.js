import React from 'react'
import { Pressable, Text, StyleSheet, Dimensions } from 'react-native'

function NextButton({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#519fc2" }}
      style={styles.buttonContainer}>
      <Text style={styles.button}> Next</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    paddingVertical: 12,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 10,
    backgroundColor: "#1185BA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginBottom: 16,
    bottom: 0,
    alignSelf: "center",
  },
  button: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default NextButton