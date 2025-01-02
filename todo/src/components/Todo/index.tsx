import { FlatList, Text, View } from 'react-native';

import { Task } from '../Task';
import { EmptyTask } from '../EmptyTask';

import { styles } from './styles';

export function Todo() {
    const tasks = [
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
        'Ir ao médico'
    ];

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
                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => <Task title={item}/>}
                    ListEmptyComponent={<EmptyTask />}
                />
        </View>
    )
}
