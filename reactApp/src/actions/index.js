import { SIGN_IN, SIGN_OUT } from "./types";
import idgenerator from "../api/idgenerator";
import history from "../history";

export const signIn = (logInformValues) => async (dispatch) => {
  const response = await idgenerator.post("user/login", logInformValues);

  dispatch({ type: SIGN_IN, payload: response.data });

  history.push("/mainpage");
};

export const signOut = (dispatch) => {
  dispatch({ type: SIGN_OUT });

  history.push("/");
};
