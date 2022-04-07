import { combineReducers } from "redux";

import ImagesReducer from "./images/reducer";

const rootReducer = combineReducers({
  ImagesReducer,
});

export default rootReducer;