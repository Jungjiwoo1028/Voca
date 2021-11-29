import { combineReducers } from "redux";
import vocaReducer from "./vocaReducer";

const rootreducer = combineReducers({
  voca: vocaReducer,
});

export default rootreducer;
