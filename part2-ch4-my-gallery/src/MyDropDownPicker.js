import { Text, TouchableOpacity, View } from "react-native"
import {SimpleLineIcons} from "@expo/vector-icons"

const headerHeight = 50;


export default ({isDropdownOpen, onPressHeader,selectedAlbumTitle,onPressAddAlbum, albums}) =>{
    return(
        <View>
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPressHeader}
                style={{
                    height: headerHeight,
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'row',
                    }}
            >
                <Text style={{fontWeight:"bold"}}>{selectedAlbumTitle}</Text>
                <SimpleLineIcons
                    name={isDropdownOpen? "arrow-down":"arrow-up"}
                    size={12}
                    color="black"
                    style={{marginLeft:8}}
                
                >

                </SimpleLineIcons>
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
                    {albums.map((album, index) =>{
                        console.log(album);
                        <TouchableOpacity key={`album-${index}`}>
                            <Text>{album.title}</Text>
                        </TouchableOpacity>
                    })}
                    </View>
                )}
        </View>
        
    )
}