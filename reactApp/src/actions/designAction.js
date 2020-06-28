import {
  SELECT_LAYER,
  UPDATE_LEFT,
  UPDATE_SIZE,
  UPDATE_TOP,
  UPDATE_HEIGHT,
  UPDATE_WIDTH,
  CHANGE_COVER_PHOTO,
} from "./types";
import history from "../history";

export const selectLayer = (layerName) => (dispatch) => {
  dispatch({ type: SELECT_LAYER, payload: layerName });
};
export const updateTop = (top) => (dispatch) => {
  dispatch({ type: UPDATE_TOP, payload: top });
};
export const updateLeft = (left) => (dispatch) => {
  dispatch({ type: UPDATE_LEFT, payload: left });
};
export const updateSize = (size) => (dispatch) => {
  dispatch({ type: UPDATE_SIZE, payload: size });
};
export const updateWidth = (size) => (dispatch) => {
  dispatch({ type: UPDATE_WIDTH, payload: size });
};
export const updateHeight = (size, layerid) => (dispatch) => {
  dispatch({ type: UPDATE_HEIGHT, payload: size });
};
export const changeCoverPhoto = (name, path) => (dispatch) => {
  dispatch({ type: CHANGE_COVER_PHOTO, payload: path });
  history.push("/design");
};
