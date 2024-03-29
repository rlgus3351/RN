
import {Image, Modal,Pressable,TouchableOpacity,View} from "react-native";
import {SimpleLineIcons} from "@expo/vector-icons"


const ArrowButton = ({iconName, onPress,disabled}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={{
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal:20,
            height:"100%",
            disabled:{disabled}
        }}>
    
            <SimpleLineIcons 
                name={iconName}
                size={20} color={disabled ? "transparent" :"black" }
    
                />
        </TouchableOpacity>
    )
}


export default({
    modalVisible,
    onPressBackdrop,
    selectedImage,
    onPressLeftArrow,
    onPressRightArrow,
    showPreviousArrow,
    showNextArrow,
}) => {

return(
    <Modal
        style={{width:280, height:280}}
        animationType="fade"
        transparent={true}
        
        visible={modalVisible}>
        <Pressable 
            onPress={onPressBackdrop}
        
            style={{
                flex:1,
            
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:`rgba(115,115,115,0.5)`,
            }}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {/* < 화살표 */}
                    <ArrowButton 
                        iconName="arrow-left"
                        onPress={onPressLeftArrow}
                        disabled={!showPreviousArrow}
                    />
                    
                    {/* 이미지 */}
                    <Pressable>
                      <Image
                        source={{uri : selectedImage?.uri}}
                        style={{width:280, height:280, backgroundColor:"white"}} 
                        resizeMode="contain"
                        />
                    </Pressable>
                    {/* > 화살표 */}
                    <ArrowButton 
                        iconName="arrow-right"
                        onPress={onPressRightArrow}
                        disabled={!showNextArrow}
                        
                    
                    />
                    
                </View>
                
        </Pressable>
    </Modal>
);
}