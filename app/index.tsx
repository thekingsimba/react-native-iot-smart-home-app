import React from 'react';
import { Center } from '@/components/ui/center';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import DateTimeDisplay from '@/components/custom-components/DisplayDate';
import { Box } from '@/components/ui/box';
import IndicatorBoxes from '@/components/custom-components/IndicatorBoxes';
import AirQualityChart from '@/components/custom-components/AirQualityChart';
import CircleButton from '@/components/custom-components/CircleButton';
import MenuHeader from '@/components/custom-components/MenuHeader';

export default function App() {
  return (
    <ScrollView style={styles.container}>
        <MenuHeader/> 
        <DateTimeDisplay/> 
        <IndicatorBoxes/>
        <AirQualityChart/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#303F9F",
    padding: 12,
    height: `${100}%`
  }
});
