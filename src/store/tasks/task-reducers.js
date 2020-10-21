import * as taskActions from "./task-action-types";

const initialState = {
  data: [],
  isLoading: false,
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
    default:
      return state;
  }
};

export default taskReducer;
