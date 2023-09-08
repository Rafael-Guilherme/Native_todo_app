import { useState } from 'react';
import { Text, View, TextInput, Pressable, FlatList, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles';
import Task from '../../components/Tasks';

export default function Home() {
    const [tasks, setTasks] = useState<string[]>([])
    const [taskName, setTaskName] = useState('')
    const [completed, setCompleted] = useState<number[]>([])
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    function handleTaskAdd() {
        if (tasks.includes(taskName)) {
            return Alert.alert("Tarefa já existente", "Já existe uma tarefa na lista com esse nome!")
        }

        setTasks(prevState => [...prevState, taskName])
        setTaskName('')
    }

    function handleTaskCompleted(index: number) {
        if(completed.includes(index)) {
            setCompleted(prevState => prevState.filter(item => item !== index))
        } else {
            setCompleted(prevState => [...prevState, index])
        }
    }

    function handleTaskRemove(name: string) {
        Alert.alert("Remover", `Remover o task ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.pageContainer}>
            <View style={styles.containerLogo}>
                <Image style={styles.imageStyle} source={require('../../../assets/logo.png')} />
            </View>
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        value={taskName}
                        onChangeText={setTaskName}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        style={[
                            styles.input,
                            {borderColor: isFocused ? '#5E60CE' : '', borderWidth: 1}
                          ]}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                    />
                    <Pressable style={styles.button} onPress={handleTaskAdd}>
                        <Text style={styles.buttonText}>+</Text>
                    </Pressable>
                </View>

                <View style={styles.displayContainer}>
                    <View style={styles.taskInfoDisplay}>
                        <Text style={styles.taskTextCreate}>
                            Criadas
                        </Text>
                        <View style={styles.taskNumberContainer}> 
                            <Text style={styles.taskNumber}>
                                {tasks.length}
                            </Text> 
                        </View>
                    </View>
                    <View style={styles.taskInfoDisplay}>
                        <Text style={styles.taskTextFinished}>
                            Concluídas
                        </Text>
                        <View style={styles.taskNumberContainer}>
                            <Text style={styles.taskNumber}>
                                {completed.length} 
                            </Text> 
                        </View>
                    </View>
                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item, index }) => (
                        <Task 
                            key={item} 
                            name={item} 
                            onRemove={() => handleTaskRemove(item)}
                            isCompleted={completed.includes(index)}
                            toggleCompletion={() => handleTaskCompleted(index)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyTaskContainer}>
                            <View style={styles.line} />
                            <Image style={styles.imageEmptyTask} source={require('../../../assets/Clipboard.png')} />
                            <Text style={styles.listEmptyTextTitle}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.listEmptyTextSub}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />

                <StatusBar translucent style="light" />
            </View>
        </View>
    )
}