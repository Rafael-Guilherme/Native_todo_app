import { useEffect, useState } from 'react';
import { Text, View, TextInput, Pressable, FlatList, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles';
import Task from '../../components/Tasks';

interface TaskProps {
    id: number
    text: string
    completed: boolean
}

export default function Home() {
    const [tasks, setTasks] = useState<TaskProps[]>([])
    const [taskName, setTaskName] = useState('')
    const [completed, setCompleted] = useState(0)
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const count = tasks.filter((task) => task.completed).length
        setCompleted(count)
    },[tasks])

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    function handleTaskAdd() {
        const newTask = {
            id: Math.random(),
            text: taskName,
            completed: false
        }

        setTasks(prevTask => [...prevTask, newTask])
        setTaskName('')
    }

    function handleTaskCompleted(taskId: number) {
        setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? {...task, completed: !task.completed} : task))

    }

    function handleTaskRemove(taskId: number) {
        Alert.alert("Remover", `Tem certeza que deseja remover essa tarefa?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevTask => prevTask.filter(task => task.id !== taskId))
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
                            isFocused ? styles.inputFocused : null,
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
                                {completed} 
                            </Text> 
                        </View>
                    </View>
                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.text}
                    renderItem={({ item }) => (
                        <Task
                            name={item.text} 
                            onRemove={() => handleTaskRemove(item.id)}
                            isCompleted={item.completed}
                            toggleCompletion={() => handleTaskCompleted(item.id)}
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