import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import designReducer from "./designReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  event: eventReducer,
  design: designReducer,
});
