
import { StyleSheet, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Profile from './src/Profile';
import Margin from './src/Margin';
import { friendProfiles, myProfile } from './src/data';
import Division from './src/Division';
import FreindSection from './src/FreindSection';
import FriendList from './src/FriendList';


const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

// console.log(`${Platform.OS} : ${statusBarHeight}, ${bottomSpace}`);

export default function App() {

  const onPressArrow = () => {
    console.log("clicked arrow");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header/>
        <Margin height={10}/>
        <Profile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
        <Margin height={15}/>
        <Division/>
        <Margin height={12}/>
        <FreindSection
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
        />
        <FriendList data={friendProfiles}
        />
      </SafeAreaView>
    </SafeAreaProvider>
      
    
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:15,
  
  },
});
