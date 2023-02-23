import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, FunctionComponent, ReactElement} from 'react';
import {taskContextType, taskType} from '../types';

type propsType = {
  children: ReactElement;
};

const taskData = '@Taskfy:Tasks';

export const useTasks = createContext<taskContextType>({} as taskContextType);

export const TasksProvider: FunctionComponent<propsType> = ({children}) => {
  const [data, setData] = useState<taskType[]>([]);

  const addTask = async (task: taskType) => {
    try {
      const newTaskList = [...data, task];
      setData(newTaskList);
      await AsyncStorage.setItem(taskData, JSON.stringify(newTaskList));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const removeTask = async (id: string) => {
    const newTaskList = data.filter(task => task.id !== id);
    setData(newTaskList);
    //await AsyncStorage.setItem(taskData, JSON.stringify(newTaskList));
  };

  useEffect(() => {
    async function loadTasks() {
      const taskList = await AsyncStorage.getItem(taskData);

      if (taskList) {
        setData(JSON.parse(taskList));
      }
    }

    loadTasks();
  }, []);

  return (
    <useTasks.Provider value={{task: data, addTask, removeTask}}>
      {children}
    </useTasks.Provider>
  );
};

export const useTaskList = (): taskContextType => {
  const context = useContext(useTasks);

  if (!context) {
    throw new Error('useTaskList deve ser usado em um TaskProvider');
  }

  return context;
};
