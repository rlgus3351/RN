import React, { useEffect } from 'react';
import { StyleSheet,Button,Image, View,Platform, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Alert, Text} from 'react-native';
import { useGallery } from './src/hook/use-gallery';
import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';
import BigImageModal from './src/BigImageModal';

export default function App() {
  const { 
    // images,
    selectedAlbum,
    imageWithAddButton, 
    pickImage,
    deleteImage,
    textInputmodalVisible,
    openTextInputModal,
    closeTextInputModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    isDropdownOpen,
    openDropDown,
    closeDropDown,
    albums,
    selectAlbum,
    deleteAlbum,
    openBigImgModal,
    closeBigImgModal,
    bigImgmodalVisible,
    selectImage,
    selectedImage,
    moveToPreviousImage,
    moveToNextImage,
    showPreviousArrow,
    showNextArrow,
  } = useGallery();


  const width = Dimensions.get('screen').width;
  const columnsSize = width / 3;
  const onPressOpenGallery = () =>{
    pickImage();
  }
  const onLongPressImage = (imageId) => deleteImage(imageId);

  const onPressAddAlbum = () => {
    openTextInputModal();
  };

  const onPressTextInputModalBackdrop = () =>{
    closeTextInputModal();
    
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
    // 1. 앨범에 타이틀 추가
  
    addAlbum();
    
    // 2. 모달 닫기 & TextInput의 value 초기화
    closeTextInputModal();
    resetAlbumTitle();
  }

  const onPressAlbum = (album) =>{
    selectAlbum(album);
    closeTextInputModal();
    closeDropDown();
  }

  const onLongPressAlbum = (albumId)=>{
    deleteAlbum(albumId);
  };


  const onPressBigImgModalBackdrop = () =>{
    closeBigImgModal();
    
  }
  const onPressImage = (image) => {
    
    selectImage(image);
    openBigImgModal();
  };

  const onPressLeftArrow = () =>{
    moveToPreviousImage();
  }
  const onPressRightArrow = () =>{
    moveToNextImage();
  }

  const renderItem = ({item:image, index}) => {
    const {id, uri} = image;
    if(id === -1){
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
      <TouchableOpacity onPress={() => onPressImage(image)} onLongPress={()=>onLongPressImage(id)}>
        <Image source={{uri}} style={{width:columnsSize, height:columnsSize}}/>
      </TouchableOpacity>
      );
  
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 앨범 DropDown, 앨범 추가 버튼 */}
      <MyDropDownPicker 
        isDropdownOpen={isDropdownOpen}
        onPressAddAlbum={onPressAddAlbum}
        onPressHeader={onPressHeader}
        albums={albums}
        onPressAlbum={onPressAlbum}
        selectedAlbum={selectedAlbum}
        onLongPressAlbum = {onLongPressAlbum}
      />

    {/*  앨범을 추가하는 TextInputModal */}
    <TextInputModal 
      modalVisible={textInputmodalVisible}
      albumTitle={albumTitle}
      setAlbumTitle={setAlbumTitle}
      onSubmitEditing={onSubmitEditing}
      onPressBackdrop={onPressTextInputModalBackdrop}
      
    
    />
    {/* 이미지를 크게 보는 Modal */}
    <BigImageModal
      modalVisible={bigImgmodalVisible}
      onPressBackdrop={onPressBigImgModalBackdrop}
      selectedImage = {selectedImage}
      onPressLeftArrow = {onPressLeftArrow}
      onPressRightArrow = {onPressRightArrow}
      showPreviousArrow = {showPreviousArrow}
      showNextArrow = {showNextArrow}
    >

    </BigImageModal>

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
