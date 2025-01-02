import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { TaskType } from '../../interfaces/TaskType';

interface TaskProps {
    task: TaskType;
    onComplete: () => void;
    onRemove: () => void;
}

export function Task({ task, onComplete, onRemove }: TaskProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onComplete}>
                <Image
                    style={styles.iconCheck}
                    source={
                        task.isCompleted
                            ? require('../../assets/images/checked.png')
                            : require('../../assets/images/unchecked.png')
                    }
                />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={[styles.taskText, task.isCompleted && styles.taskTextCompleted]}>
                    {task.title}
                </Text>
            </View>
            <Pressable
                style={({ pressed }) => ({
                    transform: [{ scale: pressed ? 0.9 : 1 }],
                })}
                onPress={onRemove}
            >
                {({ pressed }) => (
                    <Image
                        style={[
                            styles.iconTrash,
                            pressed && styles.iconTrashPressed,
                        ]}
                        source={require('../../assets/images/trash.png')}
                    />
                )}
            </Pressable>
        </View>
    );
}

