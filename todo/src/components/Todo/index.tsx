import { FlatList, Text, View } from 'react-native';

import { Task } from '../Task';
import { EmptyTask } from '../EmptyTask';
import { TaskType } from '../../interfaces/TaskType';

import { styles } from './styles';

interface TodoProps {
    tasks: TaskType[];
    onToggleTaskCompletion: (taskTitle: string) => void;
    onToggleTaskRemove: (taskTitle: string) => void;
}

export function Todo({ tasks, onToggleTaskCompletion, onToggleTaskRemove }: TodoProps) {
    const createdTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <View style={styles.container}>
            <View style={styles.statusHeader}>
                <View style={styles.status}>
                    <Text style={styles.textCriadas}>Criadas</Text>
                    <Text style={styles.counter}>{createdTasks}</Text>
                </View>
                <View style={styles.status}>
                    <Text style={styles.textConcluidas}>Concluídas</Text>
                    <Text style={styles.counter}>{completedTasks}</Text>
                </View>
            </View>
            <FlatList
                data={tasks}
                keyExtractor={item => item.title}
                renderItem={({ item }) => (
                    <Task
                        task={item}
                        onComplete={() => onToggleTaskCompletion(item.title)}
                        onRemove={() => onToggleTaskRemove(item.title)}
                    />
                )}
                ListEmptyComponent={<EmptyTask />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

