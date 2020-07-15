import {
  CREATE_EVENT,
  UPLOAD_EVENT_IMAGE,
  GET_OWN_EVENTS,
  FETCH_SINGLE_EVENT,
  CREATE_EVENT_SUCCESS,
} from "./types";
import { store } from "../store";
import idgenerator from "../api/idgenerator";
import { decrypt } from "../components/Security";
import history from "../history";

export const createEvent = (eventInfo) => (dispatch) => {
  dispatch({ type: CREATE_EVENT, payload: eventInfo });
  const token = decrypt(store.getState().auth.token);
  const event = {
    event_name: store.getState().event.event_details.title,
    event_details: store.getState().event.event_details,
  };
  console.log(event);

  let config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  idgenerator
    .post("user/create_event", event, config)
    .then((response) => {
      dispatch({ type: CREATE_EVENT_SUCCESS, payload: response.data.Event });
      history.push(`/event/feed/${response.data.Event.id}`);
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const uploadEventPhoto = (path) => (dispatch) => {
  dispatch({ type: UPLOAD_EVENT_IMAGE, payload: path });
};

export const getOwnEvent = () => (dispatch) => {
  const token = decrypt(store.getState().auth.token);
  let config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  idgenerator
    .get("user/get_own_events", config)
    .then((response) => {
      dispatch({ type: GET_OWN_EVENTS, payload: response.data.event_data });
    })
    .catch((err) => {
      console.log(err.response.statusText);
    });
};

export const fetchSingleEvent = (event_id) => (dispatch) => {
  const token = decrypt(store.getState().auth.token);
  let config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  idgenerator
    .get(`user/get_event_forms?event_id=${event_id}`, config)
    .then((response) => {
      dispatch({ type: FETCH_SINGLE_EVENT, payload: response.data });
    })
    .catch((err) => {
      console.log(err.response);
    });
};
