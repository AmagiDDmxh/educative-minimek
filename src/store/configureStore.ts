import {
  createStore,
  applyMiddleware,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from "./reducers/rootReducer";

export interface RootState {
  test: { data: number };
}

const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancer = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(
    ...storeEnhancer
  );

  const store = createStore<RootState>(
    rootReducer,
    // preloadedState,
    composedEnhancer
  );

  return store;
};

export default configureStore;
