import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
  LOADING,
} from "./../actions/types";
import { encrypt, decrypt } from "../components/Security";

const INITIAL_STATE = {
  isSignedIn: false,
  token: null,
  error: null,
  loading: false,
  message: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        token: encrypt(action.payload.token),
        loading: false,
      };

    case SIGN_IN_FAIL:
      return { ...state, error: action.payload, loading: false, message: null };

    case LOADING:
      return { ...state, loading: true, message: null };

    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        token: null,
        loading: false,
        message: null,
      };

    case SIGN_UP_SUCCESS:
      return { ...state, message: action.payload.Success, loading: false };

    case SIGN_UP_FAIL:
      return { ...state, error: action.payload, loading: false, message: null };

    default:
      return state;
  }
};
