import { Text, View } from "react-native"
import BookmarkButtons from "./BookmarkButtons"
import { COLOR } from "./color"
import AlarmButton from "./AlarmButton"
import NextBusInfo from "./NextBusInfo"

export default ({
    isBookmarked,
    onPressBookmark,
    num,
    numColor,
    directionDescription,
    processedNextBusInfos,
    }) =>  {
    return(
        <View style={{flexDirection:"row"}}>
            <View style={{flex:1, flexDirection:'row', alignItems:"center"}}>
                {/* 북마크 영역 */}
                <BookmarkButtons
                    isBookmarked={isBookmarked}
                    onPress={onPressBookmark}
                    style={{ paddingHorizontal : 15 }}
                />
                {/* 버스번호, 방향 영역*/}
                <View style={{flex:1,}}>
                    <Text style={{color:numColor, fontSize:20}}>{num}</Text>
                    <Text style={{fontSize:13, color:COLOR.GRAY_3}}>{directionDescription} 방향</Text>
                </View>

            </View>
            <View style={{flex:1, flexDirection:"row",alignItems:'center'}}>
                {/* M분 s초  / n번째 전 / 여유 좌석*/}
                <View style={{flex:1}}>
                    {processedNextBusInfos.map((info, index) => (
                        <NextBusInfo
                            hasInfo={info.hasInfo}
                            remainedTimeText={info.remainedTimeText}
                            numOfRemainedStops={info.numOfRemainedStops}
                            seatStatusText={info.seatStatusText}
                    />
                ))}
                </View>
                {/* 알람 아이콘 */}
                <AlarmButton onPress={()=>{}} style={{paddingHorizontal:15}}/>
                
            </View>
        </View>
    )
}