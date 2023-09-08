import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 8,
        marginBottom: 10,
        padding: 8
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: '85%'
    },
    inputCheckbox: {
        borderRadius: 999,
        marginRight: 8
    },
    name: {
        color: '#F2F2F2',
        fontSize: 18,
        marginLeft: 8,
    },
    nameCompleted: {
        color: '#808080',
        fontSize: 18,
        textDecorationLine: 'line-through',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: 44,
        height: 44,
    }
})