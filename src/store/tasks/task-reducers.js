import * as taskActions from "./task-action-types";

const initialState = {
  data: [],
  isLoading: false,
  isAddTaskLoading: false,
  isDeleteTaskLoading: false,
  isCompleteTaskLoading: false,
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case taskActions.GET_TASKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case taskActions.GET_TASKS_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case taskActions.GET_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    // ADD TASK
    case taskActions.ADD_TASKS_REQUEST:
      return {
        ...state,
        isAddTaskLoading: true,
      };
    case taskActions.ADD_TASKS_SUCCESS:
      return {
        ...state,
        data: [...state.data, payload],
        isAddTaskLoading: false,
      };
    case taskActions.ADD_TASKS_FAILURE:
      return {
        ...state,
        isAddTaskLoading: false,
      };

    // DELETE TASK
    case taskActions.DELETE_TASKS_REQUEST:
      return {
        ...state,
        isDeleteTaskLoading: true,
      };
    case taskActions.DELETE_TASKS_SUCCESS:
      return {
        ...state,
        data: state.data.filter((task) => task.id !== payload),
        isDeleteTaskLoading: false,
      };
    case taskActions.DELETE_TASKS_FAILURE:
      return {
        ...state,
        isDeleteTaskLoading: false,
      };

    // COMPLETE TASK
    case taskActions.COMPLETE_TASKS_REQUEST:
      return {
        ...state,
        isCompleteTaskLoading: true,
      };
    case taskActions.COMPLETE_TASKS_SUCCESS:
      return {
        ...state,
        data: state.data.map((task) =>
          task.id == payload.id ? payload : task
        ),
        isCompleteTaskLoading: false,
      };
    case taskActions.COMPLETE_TASKS_FAILURE:
      return {
        ...state,
        isCompleteTaskLoading: false,
      };

    // DEFAULT
    default:
      return state;
  }
};

export default taskReducer;
