import { put } from '@redux-saga/core/effects';
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker saga will be fired on 'FETCH_SUPPLIES'
function* fetchSupplies() {
    // get all supplies from Database 
    try {
        const supplies = yield axios.get()
    } catch {
        // console log any errors
        console.log('Error in supplies saga');
    }
} // end fetchSupplies

function* supplySaga() {
    yield takeLatest('FETCH_SUPPLIES', fetchSupplies);
}

// export supplySaga
export default supplySaga;