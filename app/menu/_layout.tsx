import '@/global.css'
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
    return (
        <GluestackUIProvider>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </GluestackUIProvider>
    )
}

export default RootLayout;


