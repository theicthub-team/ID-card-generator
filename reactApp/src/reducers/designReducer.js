import _ from "lodash";
import {
  SELECT_LAYER,
  UPDATE_TOP,
  UPDATE_SIZE,
  UPDATE_LEFT,
} from "../actions/types";

const INITIAL_STATE = {
  selectedLayer: null,
  layers: {
    "1": {
      top: 0,
      left: 0,
      size: 10,
    },
    "2": {
      top: 0,
      left: 0,
      size: 10,
    },
    "3": {
      top: 0,
      left: 0,
      size: 10,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_LAYER:
      return {
        ...state,
        selectedLayer: action.payload,
      };

    case UPDATE_TOP:
      const layers = { ...state.layers };
      _.set(layers, layers[state.selectedLayer].top, action.payload);
      console.log(layers);

      return { ...state, ...layers };
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
