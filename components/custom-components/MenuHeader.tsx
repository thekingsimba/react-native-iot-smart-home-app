import { StyleSheet, Text, View } from "react-native";
import { Box } from "../ui/box";
import { Icon, EditIcon } from "@/components/ui/icon";

type MenuHeaderProps = {
    message: string;
};

const MenuHeader = () => {
    
    return (
        <View style={styles.container} className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-11 rounded-lg mt-4 mb-4 pl-4 pr-4 pt-3" >
            <Box  >
                <Icon as={EditIcon} size="md"  />
            </Box>
            <Box  >
                <Icon as={EditIcon} size="md"  />
            </Box>
            <Box  >
                <Icon as={EditIcon} size="md"  />
            </Box>
            <Box  >
                <Icon as={EditIcon} size="md"  />
            </Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default MenuHeader;