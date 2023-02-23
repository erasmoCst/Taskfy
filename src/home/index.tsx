import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {TasksList} from '../components/tasksList';
import {useTasks} from '../context/useTasks';

export const Home = () => {
  const [newTask, setNewTask] = React.useState('');
  const {addTask: addTasks} = useContext(useTasks);

  const handleAddTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Nenhuma Tarefa Adicionada',
    };

    addTasks(data);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev</Text>
        <TextInput
          onChangeText={setNewTask}
          placeholderTextColor="#555"
          placeholder="Nova Tarefa..."
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleAddTask}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonTxt}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.titleTasks}>Minhas Tarefas</Text>

        <TasksList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#eba417',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonTxt: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleTasks: {
    paddingVertical: 50,
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  tasksTxt: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
