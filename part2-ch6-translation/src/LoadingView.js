import { View } from "react-native";
import LottieView from "lottie-react-native";
import { useRef, useEffect } from "react";

export default () => {
    // const ref = useRef(null);
    // useEffect(() => {
    //     setTimeout(() => {
    //         ref.current?.play();
    //     }, 2000);
    // }, [ref]);
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <LottieView
                autoPlay
                // ref={ref}
                style={{ width: 200, height: 200, }}
                source={require("../assets/loading.json")}
            />
        </View>
    )
}