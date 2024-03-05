import { Image, Text, View } from "react-native";
import Margin from "./Margin";
import styled from "styled-components/native";

const Container = styled.View`
    flex-direction:row;
    background-color:white;
`;

const ProfileImage = styled.Image`
    width:${(props) =>props.size}px;
    height:${(props) =>props.size}px;
    borderRadius:${(props) =>props.size * 0.4}px;
`;

const TextContainer = styled.View`
    justifyContent:center;
    marginLeft:10px;
`;

const NameText = styled.Text`
    font-weight:${(props) => props.isMe? "bold" :"normal"};
    font-size:${(props) => props.isMe ? 16 : 15 }px;
`;

const IntorductionText = styled.Text`
    font-size:${(props) => props.isMe ? 12 : 11 }px;
    color:grey;
`;

export default ({uri,name,introduction, isMe}) => {
    const size = isMe ? 50:40;
    return(
        // <View style={{flexDirection:'row',backgroundColor:"white"}}>
        <Container>
            <ProfileImage source={{uri}}  size={size}/>
            <TextContainer>
                <NameText isMe={isMe}>{name}</NameText>
                {!!introduction && (
                    <View>
                        <Margin height={isMe ? 6 : 2}/>
                        <IntorductionText isMe={isMe}>{introduction}</IntorductionText>

                    </View>

                )} 
                
            </TextContainer>
        </Container>
        // </View>
    );
}