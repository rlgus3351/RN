
import { Text, View, StyleSheet, SafeAreaView } from "react-native";




const UsePermissionInfo = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.ContentContainer}>

                <Text style={styles.title}>사용 권한 안내</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
    },
    ContentContainer: {
        width: "100%",
        marginTop: "80px",
        // paddingHorizontal: "30px",
        // paddingVertical: "20px",
        backgroundColor: "coral",
        justifyContent: "center",
        height: "85%",
    },
    textContainer: {
        backgroundColor: "#ff3434",
        paddingLeft: "30px",
        width: "80%",
    },
    title: {

        fontSize: 20,
        fontWeight: "500",
        textAlign: "left",
    }

});


export default UsePermissionInfo;


