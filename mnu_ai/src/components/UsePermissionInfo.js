
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons, SimpleLineIcons, AntDesign } from "@expo/vector-icons";


const UsePermissionInfo = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.controlContainer}>
                <AntDesign name="close" size={24} color="black" />
            </View>
            {/* <View style={[styles.container, styles.title]}></View>
            <View style={styles.middleContainer}></View>
            <View style={styles.bottomContainer}></View> */}
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    controlContainer: {
        width: "100%",
        height: "10%",
        backgroundColor: "#fff",
        position: "absolute",
        backgroundColor: "#1263ce",
    },


});


export default UsePermissionInfo;


