const INITIAL_STATE = {
    SELCTED_LAYER: null,
    Top: 0,
    left: 0,
    Size: 10
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELCTED_LAYER':
            return {
            ...state,
            SELCTED_LAYER: action.payload,
            };  
        case 'UPDATE_TOP':
            return {
              ...state,
              Top: action.payload
            }; 
        case 'UPDATE_LEFT':
            return {
              ...state,
              Left: action.payload
            }; 
        case 'UPDATE_SIZE':
            return {
                ...state,
                Size: action.payload
            }; 
        default:
            return state;
    }
  };
  