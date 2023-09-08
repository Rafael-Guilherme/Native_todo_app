import { Image, Pressable, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
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
            <View style={styles.checkboxContainer}>
                <CheckBox 
                    style={styles.inputCheckbox}
                    value={isCompleted}
                    onValueChange={toggleCompletion}
                    color={isCompleted ? '#4EA8DE' : '#4EA8DE'}
                />

                <Text style={[styles.name, isCompleted ? styles.nameCompleted : null]}>
                    {name}
                </Text>
            </View>

            <Pressable style={styles.button} onPress={() => onRemove(name)}>
                <Image style={styles.imageStyle} source={require('../../../assets/trash.png')} />
            </Pressable>
        </View>
    )
}