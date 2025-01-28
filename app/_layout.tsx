import '@/global.css'
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
    return (
        <GluestackUIProvider>
            <Slot/>
        </GluestackUIProvider>
    )
}

export default RootLayout;


