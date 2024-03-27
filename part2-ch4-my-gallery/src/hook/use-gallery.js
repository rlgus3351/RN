import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';


const defaultAlbum = {
  id:1,
  title : "기본",
}


export const useGallery = () =>{
  const [images, setImages] = useState([]);


  const [selectedAlbum, setSelectedAlbum] = useState(defaultAlbum);

  const[albums, setAlbums] = useState([defaultAlbum]);

  const [textInputmodalVisible, setTextInputmodalVisible] = useState(false);
  const [bigImgmodalVisible, setBigImgModalVisible] = useState(false);

  const [albumTitle, setAlbumTitle] = useState("");
 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const addAlbum = () => {
    const lastId = albums.length === 0 ? 0 : albums[albums.length-1].id;
    const newAlbum = {
      id : lastId + 1,
      title : albumTitle,
      albumId : selectedAlbum.id,
    };

    setAlbums([
      ...albums,  
      newAlbum,
    ]);

    setSelectedAlbum(newAlbum);
  
  };

  const selectAlbum = (album) => {
    setSelectedAlbum(album);
  };

  const deleteAlbum = (albumId) =>{
    if(albumId === defaultAlbum.id){
      Alert.alert("기본 앨범은 삭제할 수 없어요!")
      return; 
    }
    Alert.alert("앨범을 삭제하시겠어요?","",[
      {
        style:"cancel",
        text:"아니요",
      },
      {
        text:"네",
        onPress:()=>{
          const newAlbums = albums.filter((album) => album.id !== albumId);
          setAlbums(newAlbums);
          setSelectedAlbum(defaultAlbum);
        },
      },
    ]);
  }

  const resetAlbumTitle = () => setAlbumTitle("");

  const pickImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if(!result.canceled){
      const lastId = images.length === 0 ? 0 : images[images.length-1].id;
      const newImage = {
        id: lastId+1 ,
        uri : result.assets[0].uri,
        albumId : selectedAlbum.id,
      }
        setImages([...images,newImage]);
    }
  };

  const openTextInputModal = () => setTextInputmodalVisible(true);
  const closeTextInputModal = () => setTextInputmodalVisible(false);
  
  const openBigImgModal = () => setBigImgModalVisible(true);
  const closeBigImgModal = () => setBigImgModalVisible(false);



  const openDropDown = () => setIsDropdownOpen(true);

  const closeDropDown = () => setIsDropdownOpen(false);



  const onPressOpenGallery = () =>{
    pickImage();
  }

  const deleteImage =(imageId) =>{
  
    Alert.alert("이미지를 삭제하시겠어요?","",[
      {
        style:"cancel",
        text:"아니요",
      },
      {
        text:"네",
        onPress:()=>{
          const newImages = images.filter((image) => image.id !== imageId);
          setImages(newImages);
  
        },
      },
    ]);
  };

  const filteredImages = images.filter((image) => image.albumId === selectedAlbum.id);
  const imageWithAddButton = [
    
    ...filteredImages,
    {
      id: -1,
      uri : "",
    }
  ]

  const selectImage = (image) =>{
    setSelectedImage(image);
  };

  const moveToPreviousImage =() => {
    // filteredImages (현재 선택된 이미지)
    if(!selectImage) return;
    const selectedImageIndex = filteredImages.findIndex(image => image.id===selectedImage.id);
    const previousImageIdx = selectedImageIndex-1;
    if(previousImageIdx<0) return;
    const previousImage = filteredImages[previousImageIdx]
    setSelectedImage(previousImage);
  }
  
  

  const moveToNextImage =() => {
    if(!selectImage) return;
    const selectedImageIndex = filteredImages.findIndex(image => image.id===selectedImage.id);
    const nextImageIdx = selectedImageIndex+1;
    if(previousImageIdx>filteredImages.length-1 || previousImageIdx === -1) return;
    const nextImage = filteredImages[nextImageIdx]
    setSelectedImage(nextImage);
  }

  const showPreviousArrow = filteredImages.findIndex(image => image.id === selectedImage?.id) !== 0 ;
  const showNextArrow = filteredImages.findIndex(image => image.id === selectedImage?.id) !== filteredImages.length-1 ;





  return{  
    imageWithAddButton,
    pickImage,
    deleteImage,
    selectedAlbum,
    setSelectedAlbum,
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
  }
  
  
}