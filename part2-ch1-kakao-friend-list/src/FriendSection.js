import { TouchableOpacity, View,Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default(props)=>{

    return(
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:"grey"}}>친구 {props.friendProfileLen}</Text>
            <TouchableOpacity onPress={props.onPressArrow}>
                <MaterialIcons name={props.isOpened? "keyboard-arrow-down" : "keyboard-arrow-up"} size={24} color="ligthgrey" />
            </TouchableOpacity>
        
            {/* <MaterialIcons name="keyboard-arrow-up" size={24} color="black" /> */}
        </View>
    );
}