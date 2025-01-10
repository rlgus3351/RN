import React, { useRef, useEffect, useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const MainScreen = () => {

  const [username, setName] = useState("");
  const inputRef = useRef(null); // useRef로 TextInput에 대한 참조 생성

  const login = () => {

  };

  useEffect(()=>{
    console.log(username);
  },[inputRef]);

  return (
    <View>
      <TextInput
        ref={inputRef} // useRef를 TextInput에 연결
        placeholder='텍스트를 입력하세요.'
        onChangeText={setName}
        value={username}
      />
      <Button title="로그인" onPress={login} />
    </View>
  );
};

export default MainScreen;
