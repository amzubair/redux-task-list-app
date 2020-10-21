import axios from "axios";
import { toast } from "react-toastify";

import apiConfig from "../../config/api";
import * as taskActions from "./task-action-types";

export const getTask = () => async (dispatch) => {
  dispatch({ type: taskActions.GET_TASKS_REQUEST });
  try {
    const result = await axios.get(`${apiConfig.API_BASE_URL}/tasks`);

    dispatch({
      type: taskActions.GET_TASKS_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: taskActions.GET_TASKS_FAILURE,
    });
    toast.error(error.message);
  }
};

export const addTask = (data) => async (dispatch) => {
  dispatch({ type: taskActions.ADD_TASKS_REQUEST });
  try {
    const result = await axios.post(`${apiConfig.API_BASE_URL}/tasks`, data);

    dispatch({
      type: taskActions.ADD_TASKS_SUCCESS,
      payload: result.data,
    });
    toast.success("Task added successfully");
  } catch (error) {
    dispatch({
      type: taskActions.ADD_TASKS_FAILURE,
    });
    toast.error(error.message);
    throw error;
  }
};

export const deleteTask = (id) => async (dispatch) => {
  dispatch({ type: taskActions.DELETE_TASKS_REQUEST });
  try {
    await axios.delete(`${apiConfig.API_BASE_URL}/tasks/${id}`);

    dispatch({
      type: taskActions.DELETE_TASKS_SUCCESS,
      payload: id,
    });
    toast.success("Task added deleted");
  } catch (error) {
    dispatch({
      type: taskActions.DELETE_TASKS_FAILURE,
    });
    toast.error(error.message);
    throw error;
  }
};

export const completeTask = (task) => async (dispatch) => {
  dispatch({ type: taskActions.COMPLETE_TASKS_REQUEST });
  try {
    const result = await axios.put(
      `${apiConfig.API_BASE_URL}/tasks/${task.id}`,
      task
    );

    dispatch({
      type: taskActions.COMPLETE_TASKS_SUCCESS,
      payload: result.data,
    });
    toast.success("Task completed successfully");
  } catch (error) {
    dispatch({
      type: taskActions.COMPLETE_TASKS_FAILURE,
    });
    toast.error(error.message);
    throw error;
  }
};
