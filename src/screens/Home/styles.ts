import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    pageContainer: {
        flex: 1
    },
    container: {
      flex: 1,
      backgroundColor: '#1A1A1A',
      padding: 16
    },
    textContainer: {
      color: '#F2F2F2',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
    textContainerSmall: {
      color: '#6b6b6b',
      fontSize: 14,
    },
    containerLogo: {
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 173
    },
    imageStyle: {
        width: 110,
        height: 32,
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        color: '#F2F2F2',
        borderWidth: 1,
        borderRadius: 6,
        padding: 16,
        marginRight: 8,
        fontSize: 16
    },
    inputFocused: {
        borderColor: '#5E60CE',
    },
    buttonText: {
        fontSize: 24,
        color: '#F2F2F2'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 54,
        height: 54,
        borderRadius: 5,
        backgroundColor: '#1E6F9F'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: -44,
        marginBottom: 32
    },
    line: {
        backgroundColor: '#333333',
        width: '100%',
        height: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    displayContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    taskInfoDisplay: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    taskTextCreate: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 8
    },
    taskTextFinished: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 8
    },
    taskNumberContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 19,
        backgroundColor: '#333333',
        borderRadius: 12
    },
    taskNumber: {
        color: '#F2F2F2',
        fontSize: 12,
        fontWeight: 'bold'
    },
    emptyTaskContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageEmptyTask: {
        width: 56,
        height: 56,
        marginTop: 48,
        marginBottom: 16
    },
    listEmptyTextTitle: {
        color: '#808080',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    listEmptyTextSub: {
        color: '#808080',
        fontSize: 16,
        textAlign: 'center',
    }
  });