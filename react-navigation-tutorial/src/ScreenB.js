import React from "react";
import { View,Text,  Button } from "react-native";

export class ScreenB extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        
        <Button
          title='뒤로가기'
          onPress={() => {
            console.log('뒤로가기가 클릭됨')
          }}/>
      </View>
    );
  }
}