import { SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT } from "./types";
import idgenerator from "../api/idgenerator";
import history from "../history";

export const signIn = (logInformValues) => (dispatch) => {
  idgenerator
    .post("user/login", logInformValues)
    .then((response) => {
      dispatch({ type: SIGN_IN_SUCCESS, payload: response.data });
      history.push("/mainpage");
    })
    .catch((err) => {
      dispatch({ type: SIGN_IN_FAIL, payload: err.response.data });
      console.clear();
    });
};

export const signOut = (dispatch) => {
  dispatch({ type: SIGN_OUT });

  history.push("/");
};
