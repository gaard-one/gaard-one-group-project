import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* productSaga() {
    yield takeLatest('FETCH_PRODUCT', fetchProduct)
    yield takeLatest('ADD_PRODUCT', addProduct)
    yield takeLatest('UPDATE_PRODUCT_PRINTED', updateProductPrinted)
    yield takeLatest('UPDATE_PRODUCT_CLAIMED', updateProductClaimed)
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
function* updateProductPrinted(action) {
    let productPrinted = action.payload.id;
    console.log('in updateProductPrinted payload', productPrinted);
    console.log('in updateProductPrinted action', action);
    try {
        yield axios.put(`/api/product/printed/${productPrinted}`, action.payload);
        let nextAction = { type: 'FETCH_PRODUCT'};
        yield put(nextAction);
    } catch (error) {
        console.log('in updateProductPrinted PUT', error);
    }
}
//update claimed
function* updateProductClaimed(action) {
    let productPrinted = action.payload.id;
    console.log('in updateProductPrinted payload', productPrinted);
    console.log('in updateProductPrinted action', action);
    try {
        yield axios.put(`/api/product/printed/${productPrinted}`, action.payload);
        let nextAction = { type: 'FETCH_PRODUCT' };
        yield put(nextAction);
    } catch (error) {
        console.log('in updateProductPrinted PUT', error);
    }
}
//delete product

export default productSaga;