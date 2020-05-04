import _ from "lodash";
import {
  SELECT_LAYER,
  UPDATE_TOP,
  UPDATE_SIZE,
  UPDATE_LEFT,
  UPDATE_HEIGHT,
  UPDATE_WIDTH
} from "../actions/types";

const INITIAL_STATE = {
  selectedLayer: '0',
  layers: {
    "0": {
        width: 400,
        height: 600,
        type: 'Canvas',
        name: 'Canvas',
        margin: 40,
        top: 0,
        left: 0,
        size: 0,
    },
    "1": {
      type: 'Image',
      name: 'Logo',
      top: 140,
      left: 168,
      size: 10,
    },
    "2": {
      type: 'Text',
      name: 'Name',
      top: 0,
      left: 0,
      size: 10,
    },
    "3": {
      type: 'Text',
      name: 'register id',
      top: 0,
      left: 0,
      size: 10,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  const layers = { ...state.layers };

  switch (action.type) {
    case SELECT_LAYER:
      return {
        ...state,
        selectedLayer: action.payload,
      };

    case UPDATE_TOP:
      _.set(layers, `${state.selectedLayer}.top`, action.payload);

      return { ...state, layers };
    case UPDATE_LEFT:
      _.set(layers, `${state.selectedLayer}.left`, action.payload);

      return { ...state, layers };
    case UPDATE_SIZE:
      _.set(layers, `${state.selectedLayer}.size`, action.payload);

      return { ...state, layers };
    case UPDATE_HEIGHT:
      _.set(layers, `${state.selectedLayer}.height`, action.payload);
  
      return { ...state, layers }
    case UPDATE_WIDTH:
      _.set(layers, `${state.selectedLayer}.width`, action.payload);
  
      return { ...state, layers }
    default:
      return state;
  }
};
