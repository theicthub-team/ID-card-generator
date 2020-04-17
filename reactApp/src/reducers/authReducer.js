import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
} from "./../actions/types";

const INITIAL_STATE = {
  isSignedIn: false,
  token: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        token: action.payload.token,
      };

    case SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload.detail,
      };

    case SIGN_OUT:
      return { ...state, isSignedIn: false, token: null };

    case SIGN_UP_SUCCESS:
      return { ...state, message: action.payload.Success };

    case SIGN_UP_FAIL:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
