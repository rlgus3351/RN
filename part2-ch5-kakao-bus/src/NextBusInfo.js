import { View, Text } from "react-native"
import { COLOR } from "./color";

export default({
    hasInfo, //remainedTimeText "도착 정보 없음" ->  일 때  true
    remainedTimeText, //8분 0 초, 곧 도착, 도착정보 없음
    numOfRemainedStops,
    seatStatusText, // 1석 여유, 보통

}) =>{
    if (!hasInfo) return <Text style={{color:COLOR.GRAY_2}}>도착 정보 없음</Text>;
    return (
        <View>
            <Text>{remainedTimeText}</Text>
            <Text>{numOfRemainedStops} 전</Text>
            <Text>{seatStatusText}</Text>
        </View>
    )
}