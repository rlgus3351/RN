import React from "react";
import {View} from 'react-native';
import { Bagde } from "./Badge";
import { Icon } from "./Icons";


export class TabIcon extends React.Component{
    render(){
        if(this.props.visibleBadge){
            return(
                <View>
                    <Bagde fontSize={10}>
                        <Icon 
                            name={this.props.iconName}
                            size={20}
                            color={'black'}/>
                    </Bagde>
                </View>
            )
        }
        return(
            <View>
                    <Icon 
                        name={this.props.iconName}
                        size={20}
                        color={'black'}/>
            
            </View>
        )
        
    }
}