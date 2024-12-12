import { Text, View } from 'react-native';

import { styles } from './styles';

export function Todo() {
    return(
        <View style={styles.container}>
            <View style={styles.statusHeader}>
                <View style={styles.status}>
                    <Text style={styles.textCriadas}>Criadas</Text>
                    <Text style={styles.counter}>2</Text>
                </View>
                <View style={styles.status}>
                    <Text style={styles.textConcluidas}>Concluídas</Text>
                    <Text style={styles.counter}>0</Text>
                </View>
            </View>    
        </View>
    )
}

