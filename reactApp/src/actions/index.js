import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
  LOADING,
} from "./types";
import idgenerator from "../api/idgenerator";
import history from "../history";

export const signIn = (logInformValues) => (dispatch) => {
  dispatch({ type: LOADING });
  idgenerator
    .post("user/login", logInformValues)
    .then((response) => {
      dispatch({ type: SIGN_IN_SUCCESS, payload: response.data });
      history.push("/mainpage");
    })
    .catch((err) => {
      let errorMsg = "";

      try {
        errorMsg = err.response.data.detail;
      } catch (error) {
        errorMsg = err.message;
      }

      dispatch({ type: SIGN_IN_FAIL, payload: errorMsg });
      console.clear();
    });
};

export const signOut = (dispatch) => {
  dispatch({ type: SIGN_OUT });

  history.push("/");
};

export const signUp = (signUpFormValues) => (dispatch) => {
  dispatch({ type: LOADING });
  idgenerator
    .post("user/signup", signUpFormValues)
    .then((response) => {
      dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      let errorMsg = "";

      try {
        errorMsg = err.response.data;
      } catch (error) {
        errorMsg = { message: err.message };
      }

      dispatch({ type: SIGN_UP_FAIL, payload: errorMsg });
      console.clear();
    });
};
