import { View } from "react-native"
import BookmarkButtons from "./BookmarkButtons"

export default () =>{
    return(
        <View style={{flexDirection:"row"}}>
            <View style={{flex:1}}>
                <BookmarkButtons/>
            </View>
            <View style={{flex:1}}>

            </View>
        </View>
    )
}