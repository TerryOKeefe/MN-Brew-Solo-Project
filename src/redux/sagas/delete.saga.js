import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga for 'DELETE'
function* deleteRecipe(action) {
    // console log response
    console.log('deleteRecipe response:', action.payload);
    console.log('deleteRecipe id:', action.payload.id)
    
    try {
        // delete recipe by id
        yield axios.delete(`/api/recipes/${action.payload.id}`);
        // render the recipes to DOM
        yield put({type: 'FETCH_RECIPES'});
    } catch {
        // console log to show error location
        console.log('Error in deleteSaga');
    }
} // end deleteRecipe

function* deleteSaga() {
    yield takeLatest('DELETE', deleteRecipe);
} // end deleteSaga

// export deleteSaga
export default deleteSaga;