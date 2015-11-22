import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    input: {
        height: 44,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        textAlign: 'center'
    },
    inputDisabled: {
        opacity: 0.5
    },
    button: {
        borderWidth: 1,
        borderColor: '#007aff',
        margin: 10,
        marginTop: 0,
        height: 44,
        borderRadius: 8
    },
    buttonText: {
        color: '#007aff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
