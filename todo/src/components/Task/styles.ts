import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 64,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#262626'
    },
    taskText: {
        fontSize: 14,
        flexShrink: 1,
        color: '#D9D9D9',
        flexWrap: 'wrap',        
        marginHorizontal: 20,
        textAlign: 'justify',
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
        color: '#E25858',
        backgroundColor: '#333333',
    }
});
