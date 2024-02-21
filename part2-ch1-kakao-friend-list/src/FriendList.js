import { ScrollView, View } from "react-native"
import Profile from "./Profile"
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";

const bottomSpace = getBottomSpace();
export default (props) =>{
    // case 1 : 삼항 연산자
    // return props.isOpened? (
    //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:getBottomSpace}}>
    //         {props.data.map((item, index) => (
    //             <View key={index}>
    //                 <Profile
    //                     uri={item.uri}
    //                     name={item.name}
    //                     introduction={item.introduction}
    //                 />
    //                 <Margin height={13}/>
    //             </View>
                
    //         ))}
    //     </ScrollView>
    // ) : null;

    // case 2 : if문으로 먼저 예외처리

    // if(!props.isOpened) return null;
    // return(
    //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:getBottomSpace}}>
    //         {props.data.map((item, index) => (
    //             <View key={index}>
    //                 <Profile
    //                     uri={item.uri}
    //                     name={item.name}
    //                     introduction={item.introduction}
    //                 />
    //                 <Margin height={13}/>
    //             </View>

    //         ))}
    //     </ScrollView>
    // )
    

    // case 3 : && 이용

    return props.isOpened && (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:getBottomSpace}}>
            {props.data.map((item, index) => (
                <View key={index}>
                    <Profile
                        uri={item.uri}
                        name={item.name}
                        introduction={item.introduction}
                    />
                    <Margin height={13}/>
                </View>
                
            ))}
        </ScrollView>
    );
}