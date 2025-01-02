import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 64,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#262626',
        justifyContent: 'space-between'
    },
    textContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    taskText: {
        fontSize: 14,
        flexShrink: 1,
        color: '#D9D9D9',
        marginHorizontal: 20,
    },
    taskTextCompleted: {
        color: '#808080',
        textDecorationLine: 'line-through'
    },
    iconCheck: {
        marginLeft: 16
    },
    iconTrash: {
        width: 48,
        height: 48,
        marginRight: 6
    },
    iconTrashPressed: {
        borderRadius: 5,
        tintColor: '#E25858',
        backgroundColor: '#333333'
    }
});
