export const selectLayer = (layerName) => (dispatch) => {
    dispatch({type: 'SELECT_LAYER', payload: layerName});
};