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
    inputCheckbox: {
        backgroundColor: '#4EA8DE',
        borderRadius: 999
    },
    name: {
        color: '#F2F2F2',
        fontSize: 16,
        marginLeft: 8,
        marginRight: 16
    },
    nameCompleted: {
        color: '#808080',
        fontSize: 16,
        marginLeft: 8,
        marginRight: 16,
        textDecorationLine: 'line-through',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: 32,
        height: 32,
        color: '#808080'
    }
})