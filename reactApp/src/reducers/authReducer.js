import { SIGN_IN, SIGN_OUT } from "./../actions/types";

const INITIAL_STATE = {
  isSignedIn: false,
  token: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      if (action.payload.token) {
        return {
          ...state,
          isSignedIn: true,
          token: action.payload.token,
        };
      }

      if (action.payload.error) {
        return {
          ...state,
          err: action.payload.error,
        };
      }

      return state;

    // --------------------------------------------------------------

    case SIGN_OUT:
      return { ...state, isSignedIn: false, token: null };

    default:
      return state;
  }
};
