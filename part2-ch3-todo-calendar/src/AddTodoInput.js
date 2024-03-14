import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { ITEM_WIDTH, bottomSpace } from "./util";
import {AntDesign} from "@expo/vector-icons"



export default ({value, onChangeText, placeholder,onPressAdd,onSubmitEditing,onFocus}) =>{
    
    return(
        <View style={{ 
            width:ITEM_WIDTH,
            alignItems:'center',
            flexDirection:"row"}}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                onSubmitEditing={onSubmitEditing}
                blurOnSubmit={false}
                onFocus={onFocus}
                style={{
                    flex:1,
                    padding:5,
                    alignSelf:"center",
                    color:"#595959",
                }}
            />
            <TouchableOpacity
                onPress={onPressAdd}
                style={{padding : 5,}}
            >
                <AntDesign name="plus" style={{}}/>

            </TouchableOpacity>
        </View>
    );
}