import {
  ADD_TASK,
  DELETE_TASK,
  MARK_TASK_COMPLETED,
} from "../actions/actionTypes";
const initialState = [];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          isCompleted: false,
        },
      ];
    case DELETE_TASK:
      const newState = state.filter((item) => item.id !== action.id);
      state = newState;
      return state;
    case MARK_TASK_COMPLETED:
      const { id } = action;

      return state.map((task) => {
        if (task.id !== id) {
          return task;
        }
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      });
    default:
      return state;
  }
};

export default Reducer;
