import { StyleSheet, Text, View } from "react-native";
import { Box } from "../ui/box";
import { Icon, EditIcon, MenuIcon, CalendarDaysIcon } from "@/components/ui/icon";

type MenuHeaderProps = {
    message: string;
};

const MenuHeader = () => {
    
    return (
        <View style={styles.container} className="min-h-12 rounded-lg mt-4 mb-4 pt-2" >
            <Box>
                <Icon as={MenuIcon} className="text-typography-50 w-8 h-8" />
            </Box>
            <Box  >
                <Icon as={CalendarDaysIcon} className="text-typography-50 w-8 h-8" />
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