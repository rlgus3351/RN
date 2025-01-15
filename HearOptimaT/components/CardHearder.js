import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react' ;
import AntDesign from '@expo/vector-icons/AntDesign';
export default (props) =>{
    const {title} = props;
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:'space-between',
        width:'100%',
        height: "64px",
        gap:"6px",
        alignItems:"center",
        backgroundColor:"#ff0000",
        paddingVertical:"8px",
        paddingHorizontal:"4px",
        
    },
    buttonContainer:{
        backgroundColor:"#fff",
        paddingHorizontal:"8px",
        paddingVertical:"8px",
    },
    title:{
        fontSize:18,
        fontWeight:500,
        textAlign:'center',
        color:"#333",
    }
})