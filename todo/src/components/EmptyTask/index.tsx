import { Image, Text, View } from 'react-native';

import { styles } from './styles';

export function EmptyTask() {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/clipboard.png')} />
            <Text style={[styles.text, { fontWeight: 'bold' }]}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    );
}