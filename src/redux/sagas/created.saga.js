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

function* createdSaga() {
    yield takeLatest('ADD_CREATED', createdBrew);
} // end createdSaga

// export createdSaga
export default createdSaga;