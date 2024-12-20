
import { StyleSheet, View } from 'react-native';

import { TabIcon } from './src/components/TabIcon';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { HeaderWithoutCompound } from './src/components/HeaderWithoutCompound';
import { Header } from './src/components/Header/Header';


export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{flex:1}}>
        <Header>
          <Header.Group>
            <Header.Icon iconName="arrow-back" ></Header.Icon>
            <Header.Title title="HEADER"></Header.Title>
          </Header.Group>
          <Header.Icon iconName='close'></Header.Icon>
        </Header>
      </View>
    </SafeAreaProvider>
    
  );
}

