import {
  CREATE_EVENT,
  UPLOAD_EVENT_IMAGE,
  GET_OWN_EVENTS,
  FETCH_SINGLE_EVENT,
  CREATE_EVENT_SUCCESS,
} from "./../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  event_details: {
    title: null,
    images: [],
    date: null,
    place: null,
    venue: null,
  },
  event_data: null,
  fetched_single_event: null,
};

export default (state = INITIAL_STATE, action) => {
  const event_details = { ...state.event_details }; // destructering state.event_details and saving to new event_details obj

  /*
    Event creation is being handled in 2 step

    Step 1: 
        1) Upload images
        2) Get the images path from response
        3) Save images path in Reducer (event_details.images)

    Step 2: 
        1) Get other fields and keep in event_details
        2) Throw whole event_details object to the server
  */

  switch (action.type) {
    case CREATE_EVENT:
      // {title: "A", date: "2020-06-30", place: "B", venue: "C"}

      for (const [key, value] of Object.entries(action.payload)) {
        _.set(event_details, key, value);
      }

      const event_name = action.payload.title;

      return { ...state, event_details, event_name };

    case CREATE_EVENT_SUCCESS:
      return { ...state, fetched_single_event: action.payload };

    case UPLOAD_EVENT_IMAGE:
      const images = _.concat(event_details.images, action.payload); // concating images and saving into new images array
      _.set(event_details, "images", images); // replacing event_details.images with image array

      return { ...state, event_details };

    case GET_OWN_EVENTS:
      return { ...state, event_data: action.payload };

    case FETCH_SINGLE_EVENT:
      return { ...state, fetched_single_event: action.payload.event_data[0] };

    default:
      return state;
  }
};
