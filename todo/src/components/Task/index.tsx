import { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

interface TaskProps {
    title: string;
}

export function Task({title}: TaskProps) {
    const [isCompleted, setIsCompleted] = useState(false);

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsCompleted(!isCompleted)}>
                <Image 
                    style={styles.iconCheck} 
                    source={
                        isCompleted
                        ? require('../../assets/images/checked.png') 
                        : require('../../assets/images/unchecked.png') 
                    }/>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text 
                    style={[styles.taskText, isCompleted && styles.taskTextCompleted]}
                >
                    {title}
                </Text>
            </View>
            <Pressable
                style={({ pressed }) => ({
                    transform: [{ scale: pressed ? 0.9 : 1 }]
                })}
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
    )
}
