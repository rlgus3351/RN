import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


export const useGallery = () =>{
    const [images, setImages] = useState([]);

  const pickImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if(!result.canceled){
        setImages([
            ...images,
            result.assets[0].uri,
        ]);
    }
  };


  const onPressOpenGallery = () =>{
    pickImage();
  }
  return{  
    images,
    pickImage

}
  
  
}