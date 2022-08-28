import { combineReducers } from "redux";

import users from "./users_reducer";
import rooms from "./rooms_reducer";
import reservations from "./reservations_reducer";

const entitiesReducer = combineReducers({
  users,
  rooms,
  reservations
});

export default entitiesReducer;