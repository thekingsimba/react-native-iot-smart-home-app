type CircleButton = {
    message: string;
};

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const CircleButton = () => {
  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circleButton} onPress={handlePress}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  circleButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30, // Makes the button circular
    backgroundColor: "#FFC107",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default CircleButton;
