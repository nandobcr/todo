import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Task } from '../Task';
import { EmptyTask } from '../EmptyTask';

import { styles } from './styles';

interface TodoProps {
    tasks: { title: string; isCompleted: boolean }[];
    onToggleTaskCompletion: (taskTitle: string) => void;
}

export function Todo({ tasks, onToggleTaskCompletion }: TodoProps) {
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
                        title={item.title}
                        isCompleted={item.isCompleted}
                        onComplete={() => onToggleTaskCompletion(item.title)}
                    />
                )}
                ListEmptyComponent={<EmptyTask />}
            />
        </View>
    );
}

