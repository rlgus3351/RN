import { Text, TouchableOpacity, View } from "react-native"


const headerHeight = 50;


export default ({isDropdownOpen, onPressHeader,selectedAlbumTitle,onPressAddAlbum}) =>{
    return(
        
        <TouchableOpacity 
            onPress={onPressHeader}
            style={{
                height: headerHeight,
                justifyContent:'center',
                alignItems:'center',
                }}
        >
            <Text style={{fontWeight:"bold"}}>{selectedAlbumTitle}</Text>
            <TouchableOpacity 
                onPress={onPressAddAlbum}
                style={{
                    position:"absolute",
                    right:0,
                    height: headerHeight,
                    justifyContent:'center',
                    alignItems:'center',
                    paddingHorizontal:10,
                }}>
                <Text style={{fontSize:12}}>앨범 추가</Text>
            </TouchableOpacity>
            {isDropdownOpen && (
                <View 
                    style={{
                        position:"absolute",
                        top:headerHeight,
                        width:"100%",
                        height:100,
                        backgroundColor:"lightblue"}}
                >

                </View>
            )}
        </TouchableOpacity>
    )
}