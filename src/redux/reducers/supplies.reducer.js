// reducer for recipes from database
const suppliesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SUPPLIES':
            return action.payload;
        default:
            return state;
    }
}; // end suppliesReducer

// export suppliesReducer
export default suppliesReducer;