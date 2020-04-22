import { combineReducers } from "redux";
import { LOADING_COURSES } from "./actionType";

const loadingReducer = (oldState = false, action) => {
  switch (action.type) {
    case LOADING_COURSES:
      return true;
    default:
      return oldState;
  }
};

const rootreducer = combineReducers({
  loading: loadingReducer,
});

export default rootreducer;
