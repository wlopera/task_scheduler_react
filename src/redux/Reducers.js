import { combineReducers } from "redux";
import settings from "./settings/Reducer";
import historyReducer from "./history/Reducer";
import processReducer from './process/Reducer'
import adminReducer from './admin/Reducer'

const Reducers = combineReducers({
  settings,
  historyReducer,
  processReducer, 
  adminReducer
});

export default Reducers;
