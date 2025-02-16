import { Box } from "../ui/box";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconShowcase from "./IconDisplayer";
import { waterMeterIcon } from "@/assets/svg-icon/water-meter";
import { waterDropIcon } from "@/assets/svg-icon/water-drop";
import { smartHomeIcon } from "@/assets/svg-icon/smart-home";
import { smartCarIcon } from "@/assets/svg-icon/smart-car";
import { smartFarmIcon } from "@/assets/svg-icon/smart-farm";
import { smartIndustryIcon } from "@/assets/svg-icon/smart-industry";
import { smartHealthIcon } from "@/assets/svg-icon/smart-health";
import { smartCityIcon } from "@/assets/svg-icon/smart-city";
import { smartControllerIcon } from "@/assets/svg-icon/smart-controller";
import { smartCameraIcon } from "@/assets/svg-icon/smart-camera";

const MenuProductShowcase = () => {
    return (
        <View style={styles.gridContainer}>
            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1">
                <IconShowcase svgIcon={smartHomeIcon} color="#FFF" width="50" height="50" />
            </Box>

            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1">
                <IconShowcase svgIcon={smartCarIcon} color="#FFF" width="50" height="50" />
            </Box>

            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1">
                <IconShowcase svgIcon={smartFarmIcon} color="#FFF" width="70" height="70" />
            </Box>


            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1">
                <IconShowcase svgIcon={smartIndustryIcon} color="#FFF" width="70" height="70" />
            </Box>


            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1">
                <IconShowcase svgIcon={smartHealthIcon} color="#FFF" width="70" height="70" />
            </Box>

            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1" >
                <IconShowcase svgIcon={smartCityIcon} color="#FFF" width="70" height="70" />
            </Box>

            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1" >
                <IconShowcase svgIcon={smartControllerIcon} color="#FFF" width="70" height="70" />
            </Box>

            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1" >
                <IconShowcase svgIcon={smartCameraIcon} color="#FFF" width="70" height="70" />
            </Box>

            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1" >
                <IconShowcase svgIcon={smartCityIcon} color="#FFF" width="70" height="70" />
            </Box>

            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1" >
                <IconShowcase svgIcon={smartCityIcon} color="#FFF" width="70" height="70" />
            </Box>

            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1" >
                <IconShowcase svgIcon={smartCityIcon} color="#FFF" width="70" height="70" />
            </Box>

            <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 w-36 rounded-md mt-4 p-1" >
                <IconShowcase svgIcon={smartCityIcon} color="#FFF" width="70" height="70" />
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

export default MenuProductShowcase;