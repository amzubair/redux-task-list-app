import { combineReducers } from "redux";

import taskReducer from "./tasks/task-reducers";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
