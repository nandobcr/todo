import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 16
    },
    statusHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    status: {
        flexDirection: 'row'
    },
    counter: {
        height: 20,
        minWidth: 25,
        marginLeft: 10,
        color: '#D9D9D9',
        borderRadius: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
    },
    textCriadas: {
        color: '#4EA8DE',
        fontWeight: 'bold'
    },
    textConcluidas: {
        color: '#8284FA',
        fontWeight: 'bold'
    }
});