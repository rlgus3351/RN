// Library
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


// components
import UsePermissionInfo from './src/components/UsePermissionInfo';

SplashScreen.preventAutoHideAsync();
export default function App() {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1500);  // delay 1.5 seconds before hiding splash screen.
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <UsePermissionInfo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
