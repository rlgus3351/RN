import { ScrollView } from "react-native";

export default (props) =>{
    return(
        <ScrollView>
            {props.data.map((item))}
        </ScrollView>
    );
}