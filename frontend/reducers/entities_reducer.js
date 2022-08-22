import { combineReducers } from "redux";

import users from "./users_reducer";
import rooms from "./rooms_reducer";

const entitiesReducer = combineReducers({
  users,
  rooms
});

export default entitiesReducer;