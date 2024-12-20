import React from "react";
import { View, Text, Button } from "react-native";

export class ScreenA extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>이것은 ScreenA입니다.</Text>
        <Button
          title='B스크린 이동'
          onPress={() => {
            this.props.navigation.navigate('ScreenB',{value:'fromA'});
          }}/>
          <Button
          title='C스크린 이동'
          onPress={() => {
            this.props.navigation.navigate('NestedStackNavigation',{screen:'ScreenC'});
          }}/>
      </View>
    );
  }
}