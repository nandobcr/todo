import { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function Task() {
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
            <Text 
                style={[styles.taskText, isCompleted && styles.taskTextCompleted]}
            >
                Integer urna interdum massa libero auctor neque turpis turpis semper.
            </Text>
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
