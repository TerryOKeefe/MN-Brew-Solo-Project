import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga for 'ADD_CREATED'
function* createdBrew(action) {
    // console log to see response
    console.log('createdBrew response:', action.payload);
    try{
        // post new created brew
        yield axios.post('/api/created', action.payload);
    } catch {
        // console log to show error location
        console.log('Error in createdBrew');
    }
} // end createdBrew

function* fetchBrew() {
    // get all created brew from database
    try {
        const created = yield axios.get('/api/created');
        // console log to see data
        yield put({ type: 'SET_CREATED', payload: created.data });
    } catch {
        console.log('Error in fetchBrew saga');
    }
}

function* createdSaga() {
    yield takeLatest('ADD_CREATED', createdBrew);
    yield takeLatest('FETCH_CREATED', fetchBrew);
} // end createdSaga

// export createdSaga
export default createdSaga;