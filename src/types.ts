export type taskType = {
  id: string;
  title: string;
};

export type taskContextType = {
  task: taskType[];
  addTask(task: taskType): void;
  removeTask(id: string): void;
};
