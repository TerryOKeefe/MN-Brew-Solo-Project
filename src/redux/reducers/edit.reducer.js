// reducer for edit recipe
const editReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_RECIPE':
            return action.payload;
        case 'EDIT_ONCHANGE':
            return {...state, [action.payload.key]: action.payload.value};
        default:
            return state;
    }
}; // end editReducer

// export editReducer
export default editReducer;