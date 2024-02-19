import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

// console.log(`${Platform.OS} : ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:statusBarHeight+30,  
    backgroundColor: '#fff',
  },
});
