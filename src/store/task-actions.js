import axios from "axios";

import apiConfig from "../config/api";
import { GET_TASK } from "./task-action-types";

export const getTask = () => async (dispatch) => {
  try {
    const tasks = await axios.get(`${apiConfig}/tasks`);

    dispatch({
      type: GET_TASK,
      payload: tasks.data,
    });
  } catch (error) {
    console.log(error);
  }
};
