import React from 'react';
import { StyleSheet,Button,Image, View,Platform, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Alert} from 'react-native';
import { useGallery } from './src/hook/use-gallery';

export default function App() {
  const { images,imageWithAddButton, pickImage,deleteImage} = useGallery();


  const width = Dimensions.get('screen').width;
  const columnsSize = width / 3;
  const onPressOpenGallery = () =>{
    pickImage();
  }


  const renderItem = ({item:{id, uri}, index}) => {
    const onLongPress = () => deleteImage(id);
    
    return (
      <TouchableOpacity onLongPress={onLongPress}>
        <Image source={{uri}} style={{width:columnsSize, height:columnsSize}}/>
      </TouchableOpacity>
      );
  
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={onPressOpenGallery}
        title="갤러리 열기"
      />
      <FlatList 
        data={imageWithAddButton}
        renderItem={renderItem}
        numColumns={3}
      />


      
    
    </SafeAreaView>
  )
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
