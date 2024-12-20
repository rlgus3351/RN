import React from "react";

import { View, Dimensions } from "react-native";
import { SafeAreaConsumer } from "react-native-safe-area-context";

import { Spacer } from "./Spacer";
import { Icon } from "./Icons";
import { Button } from "./Button";
import { Typography } from "./Typography";


const { width } = Dimensions.get('window');

export class HeaderWithoutCompound extends React.Component {
    render() {
        return (
            <SafeAreaConsumer>
                {insets => (
                    <View style={{ paddingTop: insets.top }}>
                        <View style={{
                            width: width,
                            height: 56,
                            flexDirection: 'row',
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1
                        }}>
                            <Spacer horizontal={true} space={12} />

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    {this.props.leftIcon && (
                                        <Button onPress={this.props.leftIcon.onPress}>
                                            <Icon iconName={this.props.leftIcon.iconname} size={28} />
                                        </Button>
                                    )}

                                    <Typography fontSize={18}>{this.props.title}</Typography>
                                    {this.props.rightIcon && (
                                        <Button onPress={this.props.rightIcon.onPress}>
                                            <Icon iconName={this.props.rightIcon.iconname} size={28} />
                                        </Button>
                                    )}
                                </View>
                            </View>
                        </View>

                    </View>
                )}
            </SafeAreaConsumer>
        )
    }
}