import {
  createStore,
  applyMiddleware,
  compose,
  StoreEnhancerStoreCreator,
  // Store,
} from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

export interface RootState {
  test: { data: number };
}

const configureStore = () => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancer = [middlewareEnhancer];

  const composedEnhancer = compose<StoreEnhancerStoreCreator<RootState>>(
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
