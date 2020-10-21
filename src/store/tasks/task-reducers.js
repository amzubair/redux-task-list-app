import * as taskActions from "./task-action-types";

const initialState = {
  data: [],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case taskActions.GET_TASKS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
