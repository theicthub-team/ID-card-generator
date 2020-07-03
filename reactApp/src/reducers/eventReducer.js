import { CREATE_EVENT } from "./../actions/types";

const INITIAL_STATE = {
  token: null,
  event_name: null,
  event_details: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
      };

    default:
      return state;
  }
};
