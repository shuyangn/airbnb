import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import filters from './filters_reducer';
import createReservation from "./create_reservation_reducer";

const uiReducer = combineReducers({
  modal: modalReducer,
  filters,
  createReservation
});

export default uiReducer;