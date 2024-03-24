import React, { useEffect } from 'react';
import { StyleSheet,Button,Image, View,Platform, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Alert, Text} from 'react-native';
import { useGallery } from './src/hook/use-gallery';
import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';

export default function App() {
  const { 
    // images,
    selectedAlbum,
    imageWithAddButton, 
    pickImage,
    deleteImage,
    modalVisible,
    openModal,
    closeModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    isDropdownOpen,
    openDropDown,
    closeDropDown,
    albums,
  } = useGallery();


  const width = Dimensions.get('screen').width;
  const columnsSize = width / 3;
  const onPressOpenGallery = () =>{
    pickImage();
  }
  const onLongPressImage = (imageId) => deleteImage(imageId);

  const onPressAddAlbum = () => {
    openModal();
  };

  const onPressBackdrop = () =>{
    closeModal();
    
  }
  const onPressHeader = () =>{
    if(isDropdownOpen){
      closeDropDown();
    }else{
      openDropDown();
    }
  }

  const onSubmitEditing = () =>{
    if(!albumTitle) return;
    addAlbum();
    closeModal();
    resetAlbumTitle();
  }

  const renderItem = ({item:{id, uri}, index}) => {
    if(id=== -1){
      return (
        <TouchableOpacity 
        onPress={onPressOpenGallery}
        style={{
          width:columnsSize, height:columnsSize, backgroundColor:"lightgrey",
          justifyContent:'center',
          alignItems:"center",
          }}>
          <Text style={{fontWeight:"100",fontSize:45}}>+</Text>
        </TouchableOpacity>
        );
    }
  
    
    return (
      <TouchableOpacity onLongPress={()=>onLongPressImage(id)}>
        <Image source={{uri}} style={{width:columnsSize, height:columnsSize}}/>
      </TouchableOpacity>
      );
  
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 앨범 DropDown, 앨범 추가 버튼 */}
      <MyDropDownPicker 
        isDropdownOpen={isDropdownOpen}
        selectedAlbumTitle = {selectedAlbum.title}
        onPressAddAlbum={onPressAddAlbum}
        onPressHeader={onPressHeader}
        albums={albums}
      />

    {/* 앨범을 추가하는 TextInputModal */}
    <TextInputModal 
      modalVisible={modalVisible}
      albumTitle={albumTitle}
      setAlbumTitle={setAlbumTitle}
      ronSubmitEditing={onSubmitEditing}
      onPressBackdrop={onPressBackdrop}
    />

    {/* 이미지 리스트 */}
      <FlatList
        style={{zIndex:-1}}
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
  
    marginTop:Platform.OS ==="android" ? 30 : 0,
  },
});
