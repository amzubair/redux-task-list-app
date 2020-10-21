import axios from "axios";
import { toast } from "react-toastify";

import apiConfig from "../../config/api";
import * as taskActions from "./task-action-types";

export const getTask = () => async (dispatch) => {
  dispatch({ type: taskActions.GET_TASKS_REQUEST });
  try {
    const tasks = await axios.get(`${apiConfig.API_BASE_URL}/tasks`);

    setTimeout(() => {
      dispatch({
        type: taskActions.GET_TASKS_SUCCESS,
        payload: tasks.data,
      });
    }, 3000);
  } catch (error) {
    dispatch({
      type: taskActions.GET_TASKS_FAILURE,
    });
    toast.error(error.message);
  }
};
