import { Image, Text, View } from 'react-native';

export function EmptyTask() {
    return(
        <View>
            <Image source={require('../../assets/images/clipboard.png')} />
            <Text>Você ainda não tem tarefas cadastradas</Text>
            <Text>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    );
}