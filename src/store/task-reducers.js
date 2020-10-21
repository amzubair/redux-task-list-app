import { GET_TASK } from "./task-action-types";

const initialState = {
  data: [],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TASK:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
