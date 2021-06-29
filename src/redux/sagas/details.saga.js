import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker saga for 'GET_DETAILS'
function* fetchDetails(action) {
    console.log('In fetchDetails, payload:', action.payload.id);
    try {
        const response = yield axios.get(`/api/recipes/${action.payload.id}`);
        // console log to see what response.data is
        console.log('Details Saga response:', response.data);
        // set details to store the response.data
        yield put({ type: 'SET_DETAILS', payload: response.data});
    } catch {
        // console log to point to error
        console.log('Error in fetchDetails');
    }
} // end fetchDetails

function* detailSaga() {
    yield takeLatest('GET_DETAILS', fetchDetails);
}

// export recipeSaga
export default detailSaga;