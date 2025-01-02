import { useState } from 'react';
import { Alert, Image, Pressable, TextInput, View } from 'react-native';

import { Todo } from '../../components/Todo';
import { TaskType } from '../../interfaces/TaskType';

import { styles } from './styles';

export function Home() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<TaskType[]>([]);

    function handleAddTask() {
        if (tasks.some(t => t.title === task)) {
            return Alert.alert('Aviso', `Tarefa ${task} já está na lista.`);
        }

        setTasks(prevTasks => [...prevTasks, { title: task, isCompleted: false }]);
        setTask('');
    }

    function handleToggleTaskCompletion(taskTitle: string) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.title === taskTitle ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    }

    function handleToggleTaskRemove(taskTitle: string) {
        setTasks(prevTasks => prevTasks.filter(task => task.title !== taskTitle));
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/images/todo.png')} />
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setTask}
                    value={task}
                />
                <Pressable
                    style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                    onPress={handleAddTask}
                >
                    <Image source={require('../../assets/images/plus.png')} />
                </Pressable>
            </View>
            <Todo 
                tasks={tasks} 
                onToggleTaskCompletion={handleToggleTaskCompletion} 
                onToggleTaskRemove={handleToggleTaskRemove}/>
        </View>
    );
}
