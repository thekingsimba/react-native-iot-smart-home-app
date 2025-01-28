import { Box } from "../ui/box";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const IndicatorBoxes = () => {

  return (
    <View style={styles.gridContainer}>
        <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4">
            <Text> just </Text>
        </Box>
        <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20  w-36 rounded-md mt-4">
            <Text> just </Text>
        </Box>

        <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36  rounded-md  mt-6">
            <Text> just </Text>
        </Box>
        <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36  rounded-md mt-6">
            <Text> just </Text>
        </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "30%", // Adjust width for responsiveness
    aspectRatio: 1, // Ensures square items
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default IndicatorBoxes;
