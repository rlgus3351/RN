import React from 'react';
import { StyleSheet,Button,Image, SafeAreaView,FlatList,Platform} from 'react-native';

import { useGallery } from './src/hook/use-gallery';

export default function App() {
  
  const {images,pickImage} = useGallery();

  
  const onPressOpenGallery = () =>{
    pickImage();
  }

  const renderItem = ({item, index}) => {
    return
      <Image source={{uri:item}} style={{width:200, height:200}} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title='갤러리 열기' onPress={onPressOpenGallery}
      />
      <FlatList
        data={images}
        renderItem={renderItem}
      />

    
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
    marginTop:Platform.OS ==="android" ? 30 : 0,
  },
});
