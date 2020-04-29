import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import designReducer from "./designReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  design: designReducer
});
