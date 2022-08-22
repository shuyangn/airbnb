import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import filters from './filters_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  filters
});

export default uiReducer;