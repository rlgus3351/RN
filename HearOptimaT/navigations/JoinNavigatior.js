
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {Component} from "react";


const Stack = createNativeStackNavigator();


export class NestedStackNavigation extends Component{
    render(){
        return(
            <Stack.Navigator>
                
            </Stack.Navigator>
        )
    }
}