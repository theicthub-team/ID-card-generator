import { SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT } from "./../actions/types";

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

    // --------------------------------------------------------------

    case SIGN_OUT:
      return { ...state, isSignedIn: false, token: null };

    default:
      return state;
  }
};
