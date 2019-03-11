import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* productSaga() {
    yield takeLatest('FETCH_PRODUCT', fetchProduct)
    yield takeLatest('ADD_PRODUCT', addProduct)
}
//Create product
function* addProduct(action) {
    try {
        yield axios.post('/api/product', action.payload);
        const newAction = { type: 'FETCH_PRODUCT' };
        yield put(newAction);
    } catch (error) {
        console.log('error in addProduct POST saga');
    }
}
//fetch product
function* fetchProduct() {
    try {
        const responseFromServer = yield axios.get('/api/product');
        const nextAction = { type: 'SET_PRODUCT', payload: responseFromServer.data}
        yield put(nextAction);
    } catch (error) {
        console.log('error in fetchProduct GET saga', error);
    }
}

//update printed 

//update claimed

//delete product

export default productSaga;