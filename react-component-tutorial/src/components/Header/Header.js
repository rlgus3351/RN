import React from "react";
import {SafeAreaInsetsContext} from "react-native-safe-area-context";
import {View, Dimensions} from "react-native";
import { Spacer } from "../Spacer";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderButton } from "./HeaderButton";
import { HeaderGroup } from "./HeaderGroup";

const {width} = Dimensions.get('window');
console.log(width);

export class Header extends React.Component{
    render(){
        return(
            <SafeAreaInsetsContext.Consumer>
                {insets => (
                    <View style={{paddingTop:insets.top, backgroundColor:'white'}}>
                        <View style={{
                            width:width,
                            flexDirection:'row',
                            height:56,
                            borderBottomColor:'gray',
                            borderBottomWidth:1,
                            alignItems:'center',
                            
                            }}>
                            
                            <View style={{width:width, flexDirection:'row',justifyContent:'space-between', paddingHorizontal:10,}}>
                                
                                {this.props.children}
                            </View>
                            
                            
                        </View>
                    </View>
                )}
            </SafeAreaInsetsContext.Consumer>
        )
    }
}

Header.Title=HeaderTitle;
Header.Icon = HeaderButton;
Header.Group = HeaderGroup;