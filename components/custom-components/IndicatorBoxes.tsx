import { Box } from "../ui/box";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import IconDisplay from "./IconDisplayer";
import { co2Icon } from "@/assets/svg-icon/co2-icon";
import { sunCloudyIcon } from "@/assets/svg-icon/sun-cloudy";
import IconShowcase from "./IconDisplayer";
import { waterMeterIcon } from "@/assets/svg-icon/water-meter";
import { waterDropIcon } from "@/assets/svg-icon/water-drop";

const IndicatorBoxes = () => {

  return (
    <View style={styles.gridContainer}>
      <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1">
        <IconShowcase svgIcon={sunCloudyIcon} color="#FFC107" width="50" height="50" />
      </Box>

      <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1">
        <IconShowcase svgIcon={co2Icon} color="#FFC107" width="50" height="50" />
      </Box>

      <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1">
        <IconShowcase svgIcon={waterMeterIcon} color="#FFC107" width="50" height="50" />
      </Box>

      <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1" >
        <IconShowcase svgIcon={waterDropIcon} color="#FFC107" width="50" height="50" />
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
