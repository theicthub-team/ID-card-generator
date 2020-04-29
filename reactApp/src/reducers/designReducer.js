import {
  SELECT_LAYER,
  UPDATE_TOP,
  UPDATE_SIZE,
  UPDATE_LEFT,
} from "../actions/types";

const INITIAL_STATE = {
  selectedLayer: null,
  top: 0,
  left: 0,
  size: 10,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_LAYER:
      return {
        ...state,
        selectedLayer: action.payload,
      };
    case UPDATE_TOP:
      return {
        ...state,
        top: action.payload,
      };
    case UPDATE_LEFT:
      return {
        ...state,
        left: action.payload,
      };
    case UPDATE_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
};
