import { View, Text,StyleSheet} from "react-native";
import{ Ionicons }from '@expo/vector-icons';

const IconButton = (props)=>{
    return(
        <View style={{paddingHorizontal:6}}>
            <Ionicons name={props.name} size={24} color="black" />
        </View>
    )
}


const Header = () =>{
    return(
        <View style={{flexDirection:'row', justifyContent:"space-between", paddingVertical:10, backgroundColor:"white"}}>
            <Text style={{fontSize:22, fontWeight:'bold'}} >친구</Text>
            <View style={{flexDirection: "row"}}>
                <IconButton name="search-outline"/>
                <IconButton name="person-add-outline" />
                <IconButton name="musical-notes-outline" />
                <IconButton name="settings-outline" />
        
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {

    },
    title:{
        fontSize:22,
        fontWeight:"bold",
    }
});

export default Header;