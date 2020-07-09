import { CREATE_EVENT, UPLOAD_EVENT_IMAGE } from "./../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  token: null,
  event_name: null,
  event_details: {
    images: [],
    date: null,
    place: null,
    venue: null,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return { ...state };

    case UPLOAD_EVENT_IMAGE:
      _.concat(state.event_details.images, action.payload);
      return { ...state };

    default:
      return state;
  }
};
