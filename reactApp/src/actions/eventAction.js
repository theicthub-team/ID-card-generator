import { CREATE_EVENT, UPLOAD_EVENT_IMAGE, GET_OWN_EVENTS } from "./types";
import { store } from "../store";
import idgenerator from "../api/idgenerator";
import { decrypt } from "../components/Security";

export const createEvent = (eventInfo) => (dispatch) => {
  dispatch({ type: CREATE_EVENT, payload: eventInfo });
  const token = decrypt(store.getState().auth.token);
  const event = store.getState().event;

  let config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  idgenerator
    .post("user/create_event", event, config)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err.response.statusText);
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
