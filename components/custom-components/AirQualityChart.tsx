import { Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Box } from "../ui/box";
        
const AirQualityChart = () => {
    const barData = [
        {value: 250, label: 'M', frontColor: '#177AD5'},
        {value: 500, label: 'T', frontColor: '#D54E65'},
        {value: 745, label: 'W', frontColor: '#757575'},
        {value: 320, label: 'T', frontColor: '#EB6916'},
        {value: 600, label: 'F', frontColor: '#789169'},
    ];
    return (
        <Box className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-20 rounded-md mt-4">
            <BarChart
                barWidth={22}
                noOfSections={3}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
            />
        </Box>
            
    );
};


export default AirQualityChart;