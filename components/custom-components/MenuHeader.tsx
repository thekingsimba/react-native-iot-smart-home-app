import { StyleSheet, Text, View, Pressable } from "react-native";
import { Box } from "../ui/box";
import { Icon, EditIcon, MenuIcon, CalendarDaysIcon } from "@/components/ui/icon";
import { useRouter } from "expo-router";
type MenuHeaderProps = {
    message: string;
};

const MenuHeader = () => {
    const router = useRouter();
    return (
        <View style={styles.container} className="min-h-12 rounded-lg mt-4 mb-4 pt-2" >
            <Box>   
                <Pressable onPress={() => router.push("menu")}>
                    <Icon as={MenuIcon} className="text-typography-50 w-8 h-8" />
                </Pressable>
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