// reducer for created brew from database
const createdReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CREATED':
            return action.payload;
        default:
            return state;
    }
}; // end createdReducer

// export createdReducer
export default createdReducer;