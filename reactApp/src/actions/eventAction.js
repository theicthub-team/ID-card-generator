import { CREATE_EVENT, UPLOAD_EVENT_IMAGE } from "./types";
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
