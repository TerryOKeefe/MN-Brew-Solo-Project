import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga for 'EDIT_RATING'
function* editRecipe(action) {
    // console log response
    console.log('edit response:', action.payload);
    console.log('edit response:', action.payload.id);
} // end editRating

function* editSaga() {
    yield takeLatest('EDIT_RATING', editRecipe);
} // end editSaga

// export editSaga
export default editSaga;