export const selectLayer = (layerName) => (dispatch) => {
    dispatch({type: 'SELCTED_LAYER', payload: layerName});
};