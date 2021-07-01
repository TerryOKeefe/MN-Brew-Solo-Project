import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga 
function* editRecipe(action) {
    // console log response
    console.log('edit response:', action.payload);
    console.log('edit response:', action.payload.id);
    try {
        yield axios.put(`/api/recipes/${action.payload.id}`, action.payload);
        
    } catch {
        // console log errors
        console.log('Error in editSaga');
    }
} // end editRating

function* editSaga() {
    yield takeLatest('SUBMIT_EDIT', editRecipe);
} // end editSaga

// export editSaga
export default editSaga;