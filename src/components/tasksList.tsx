import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {useTaskList} from '../context/useTasks';
import {taskType} from '../types';

export const TasksList = () => {
  const {task, removeTask} = useTaskList();

  const handleRemoveTask = (id: string) => {
    Alert.alert('Tem certeza?', 'Deseja realmente excluir a tarefa?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => removeTask(id),
      },
    ]);
  };

  return (
    <FlatList
      data={task as unknown as taskType[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handleRemoveTask(item.id)}
          style={styles.buttonTask}>
          <Text style={styles.tasksTxt}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
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
