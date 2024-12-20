
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {Component} from "react";
import { ScreenC } from "./ScreenC";

import { ScreenA } from "./ScreenA";

const Stack = createNativeStackNavigator();


export class NestedStackNavigation extends Component{
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="ScreenA" component={ScreenA}/>
                
                <Stack.Screen name="ScreenC" component={ScreenC}/>
            </Stack.Navigator>
        )
    }
}