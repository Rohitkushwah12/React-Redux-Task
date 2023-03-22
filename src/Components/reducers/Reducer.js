import {
  ADD_TASK,
  DELETE_TASK,
  MARK_TASK_COMPLETED,
} from "../actions/actionTypes";
const initialState = { task: [{ name: "Studying", isCompleted: false }] };

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [
          ...state.task,
          {
            id: action.payload.id,
            name: action.payload.name,
            isCompleted: false,
          },
        ],
      };
    case DELETE_TASK:
      const newTasks = state.task.filter((item) => item.id !== action.id);
      return {
        task: newTasks,
      };
    case MARK_TASK_COMPLETED:
      const { id, name } = action.payload;
      const tasks = state.task.filter((item) => item.id !== id);
      const task = state.task.find((item) => item.id === id);
      task.id = id;
      task.name = name;
      task.isCompleted = true;
      tasks.push(task);
      return {
        ...state,
        task: [...tasks],
      };
    default:
      return state;
  }
};

export default Reducer;
