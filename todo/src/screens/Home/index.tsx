import { Image, Pressable, TextInput, View } from 'react-native';

import { styles } from './styles';

import { Todo } from '../../components/Todo';

export function Home() {
    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../assets/images/todo.png')} />
                </View>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input} 
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor='#808080'     
                    />
                    <Pressable
                        style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed,
                        ]}
                    >
                        <Image source={require('../../assets/images/plus.png')} />
                    </Pressable>
                </View>
                <Todo />
            </View>
        </>
    )
}