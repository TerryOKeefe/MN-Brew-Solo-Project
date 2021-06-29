import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga will be fired on 'FETCH_RECIPES'
function* fetchRecipes() {
    // get all recipes from Database
    try {
        const recipes = yield axios.get('/api/recipes');
        // console log to see data
        console.log('GET recipes:', recipes.data);
        yield put({ type: 'SET_RECIPES', payload: recipes.data });
    } catch {
        console.log('Error in recipe saga');
    }
} // end fetchRecipes

function* recipeSaga() {
    yield takeLatest('FETCH_RECIPES', fetchRecipes);
}

export default recipeSaga;