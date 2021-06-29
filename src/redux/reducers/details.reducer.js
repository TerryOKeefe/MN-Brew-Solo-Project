// reducer for recipe details
const detailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}; // end detailsReducer

// export detailsReducer
export default detailsReducer;