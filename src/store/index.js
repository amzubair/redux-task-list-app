import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import reducers from "./root-reducer.js";

const logger = createLogger({
  collapsed: true,
});

const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
