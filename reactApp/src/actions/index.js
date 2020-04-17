import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
} from "./types";
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

export const signUp = (signUpFormValues) => (dispatch) => {
  idgenerator
    .post("user/signup", signUpFormValues)
    .then((response) => {
      dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: SIGN_UP_FAIL, payload: err.response.data });
      console.clear();
    });
};
