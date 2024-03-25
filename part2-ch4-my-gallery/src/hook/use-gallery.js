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

  const [modalVisible, setModalVisible] = useState(false);

  const [albumTitle, setAlbumTitle] = useState("");
 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    ])
  
  };

  const selectAlbum = (album) => {
    setSelectedAlbum(album);
  };


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

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  
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

  useEffect(()=>{
    console.log("1) images",images);
  },[images]);

  useEffect(()=>{
    console.log("2) filteredImages",filteredImages);
  },[filteredImages]);

  return{  
    imageWithAddButton,
    pickImage,
    deleteImage,
    selectedAlbum,
    setSelectedAlbum,
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
    selectAlbum,
  }
  
  
}