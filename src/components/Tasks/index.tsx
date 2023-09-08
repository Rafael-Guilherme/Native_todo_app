import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
    name: string
    onRemove: (name: string) => void
    isCompleted: boolean
    toggleCompletion: () => void;
}

export default function Task({ name, onRemove, isCompleted, toggleCompletion }: Props) {
    return (
        <View style={styles.container}>
            <input 
                type="checkbox" 
                style={styles.inputCheckbox}
                checked={isCompleted}
                onChange={toggleCompletion}
            />

            <Text style={[styles.name, isCompleted ? styles.nameCompleted : null]}>
                {name}
            </Text>

            <Pressable style={styles.button} onPress={() => onRemove(name)}>
                <Image style={styles.imageStyle} source={require('../../../assets/trash.png')} />
            </Pressable>
        </View>
    )
}