import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MenuProductShowcase from '@/components/custom-components/MenuProductShowcase';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <MenuProductShowcase />
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
