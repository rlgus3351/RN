import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';
import { Icon } from './src/components/Icons';
import { Bagde } from './src/components/Badge';
import { Button } from './src/components/Button';
import { Divider } from './src/components/Divider';
import { Spacer } from './src/components/Spacer';



export default function App() {
  return (
    <View style={styles.container}>
      <Typography color="red" fontSize={20}>
        이것은 텍스트 입니다.
      </Typography>
      <Divider/>
      <Spacer space={20}/>
      <LocalImage localAsset={require('./assets/favicon.png')} width={50} height={50} />
      <Divider/>
      <Spacer space={20}/>
      <RemoteImage
        url={'data:image/jpeg;base64,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'}
        width={200} height={100} />
    <Spacer space={20}/>
    <Divider/>
      <Icon name='home' size={40} color='red' />
      <View style={{flexDirection:'row'}}>
        <Bagde fontSize={10}>
          <Typography>Badge</Typography>
        </Bagde>
        <Bagde fontSize={5}>
          <Icon name='home' color="black" size={50}/>
        </Bagde>
      </View>


      <View style={{flexDirection:'row', marginTop:32}}>
        <Button onPress={()=>console.log("버튼 눌림")}>
          <Icon name='home' color="green" size={50}/>
        </Button>
      </View>
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
