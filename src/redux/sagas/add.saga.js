import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga for 'ADD_RECIPE'
function* addRecipe(action) {
    // console log to see response
    console.log('addRecipe response:', action.payload);
    try {
        // post new recipe
        yield axios.post('/api/recipes', action.payload);
        // get the recipes to render to DOM
        yield put({type: 'FETCH_RECIPES'});
    } catch {
        // console log to show error location
        console.log('Error in addRecipe saga');
    }
} // end addRecipe

function* addRecipeSaga() {
    yield takeLatest('ADD_RECIPE', addRecipe)
} // end addRecipeSaga

// export addRecipeSaga
export default addRecipeSaga;