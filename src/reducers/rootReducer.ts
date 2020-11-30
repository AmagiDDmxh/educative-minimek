import { combineReducers } from "redux";

import testReducer from "./testReducer";

interface RootState {
  test: {
    data: number
  }
}

const rootReducer = combineReducers<RootState>({
  test: testReducer,
});

export default rootReducer;
