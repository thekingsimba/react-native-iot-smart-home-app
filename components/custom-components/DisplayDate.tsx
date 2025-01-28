import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Center } from "../ui/center";

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  

  const formattedTime = currentDateTime.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });


  return (
    <Center className="bg-primary-100 rounded-lg p-2 mt-2 mb-2">
      
      <Text className="text-typography-0 font-bold">{currentDateTime.toLocaleDateString(undefined, { weekday: "long" })} </Text>

      <Text className="text-typography-0 font-bold">{currentDateTime.toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" })} </Text>

      <Text className="text-typography-0 font-bold text-2xl">{formattedTime} </Text>
    </Center>
  );
};

const styles =  StyleSheet.create({ 
    dateWrapper : {
    }
})

export default DateTimeDisplay;

