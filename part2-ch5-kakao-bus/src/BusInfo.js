import { Text, View } from "react-native"
import BookmarkButtons from "./BookmarkButtons"
import { COLOR } from "./color"

export default ({
    isBookmarked,
    onPressBookmark,
    num,
    numColor,
    directionDescription,
}) =>{
    return(
        <View style={{flexDirection:"row"}}>
            <View style={{flex:1, flexDirection:'row', alignItems:"center"}}>
                {/* 북마크 */}
                <BookmarkButtons
                    isBookmarked={isBookmarked}
                    onPress={onPressBookmark}
                />
                {/* 버스번호, 방향 */}
                <View>
                    <Text style={{color:numColor, fontSize:20}}>{num}</Text>
                    <Text style={{fontSize:13, color:COLOR.GRAY_3}}>{directionDescription}</Text>
                </View>

            </View>
            <View style={{flex:1}}>

            </View>
        </View>
    )
}