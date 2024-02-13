import React from 'react';
import {View, Text,Button} from 'react-native';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count  :0,
        };
    }
    render() {
        return (
            <View>
                <Text>You Clicked {this.state.count}</Text>
                <Button title="Click Me" onPress={() => this.setState({count: this.state.count + 1})}/>
            </View>
        );
    }
}

export default Component;