import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default (props) => {
    const { onPress, isSelected, text } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.buttonContainer,
                isSelected ? styles.selectedButton : styles.notSelectedButton,
            ]
            }>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#ffffff80",
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginHorizontal: 5,
    },

    selectedButton: {
        borderColor: "white",
    },
    notSelectedButton: {
        borderColor: "transparent",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    }
});



