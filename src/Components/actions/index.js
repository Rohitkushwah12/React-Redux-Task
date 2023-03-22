import { ADD_TASK, DELETE_TASK, MARK_TASK_COMPLETED } from "./actionTypes";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      id: Date.now(),
      name: task.name,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id,
  };
};

export const markTaskCompleted = (task) => {
  return {
    type: MARK_TASK_COMPLETED,
    payload: {
      id: task.id,
      name: task.name,
      isCompleted: task.name,
    },
  };
};
