import axios from "axios";

import apiConfig from "../../config/api";
import * as taskActions from "./task-action-types";

export const getTask = () => async (dispatch) => {
  try {
    const tasks = await axios.get(`${apiConfig}/tasks`);

    dispatch({
      type: taskActions.GET_TASK,
      payload: tasks.data,
    });
  } catch (error) {
    console.log(error);
  }
};
