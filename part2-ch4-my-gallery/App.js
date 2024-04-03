import React, { useEffect } from 'react';
import { StyleSheet,Button,Image, View,Platform, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Alert, Text} from 'react-native';
import { useGallery } from './src/hook/use-gallery';
import {useRewardAd} from './src/hook/use_reward-ad';
import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';
import BigImageModal from './src/BigImageModal';
import ImageList from './src/ImageList';
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
  const { 
    loadRewarAd,
    isLoaded,
    isClosed,
    isRewarded,
    resetAdValue,
   } = useRewardAd();

  useEffect(() =>{
    if(isRewarded && isClosed){
      openTextInputModal();
      resetAdValue();
    }
  },[isRewarded, isClosed]);




  
  const onPressOpenGallery = () =>{
    pickImage();
  }
  const onLongPressImage = (imageId) => deleteImage(imageId);
  const onPressWatchAd = () => {
    loadRewarAd();
  }
  const onPressAddAlbum = () => {
    if(albums.length >=2){
      Alert.alert("광고를 시청해야 앨범을 추가할 수 있습니다","",[
        {
          style:"cancel",
          text:'닫기',
        },
        {
          text:"광고 시청",
          onPress : onPressWatchAd,
        }
    ]);
      return;
    } else{
      openTextInputModal();
    }
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
      <ImageList
        imagesWithAddButton = {imagesWithAddButton}
        onPressOpenGallery = {onPressOpenGallery}
        onPressImage = {onPressImage}
        onLongPressImage = {onLongPressImage}
        
      
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






