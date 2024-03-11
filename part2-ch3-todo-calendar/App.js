import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {runPracticeDayjs} from './src/practice-dayjs';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { getCalendarColumns } from './src/util';
export default function App() {

  const now = dayjs();
  const columns = getCalendarColumns("2022-11-24 00:00:00");
  useEffect(() => {
    runPracticeDayjs();
    console.log("columns" , columns);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
