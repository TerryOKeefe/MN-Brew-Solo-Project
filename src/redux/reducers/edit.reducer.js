// reducer for edit recipe
const editReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_RECIPE':
            return action.payload;
        default:
            return state;
    }
}; // end editReducer

// export editReducer
export default editReducer;