import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* productTypeSaga() {
    yield takeEvery('FETCH_PRODUCT_TYPE', fetchProductType)
    yield takeEvery('ADD_PRODUCT_TYPE', createProductType)
    yield takeLatest('UPDATE_PRODUCT_TYPE', updateProductType)
    yield takeLatest('DELETE_PRODUCT_TYPE', deleteProductType)

}

// create product type
function* createProductType(action) {
    try {
        yield axios.post('/api/productType/newproduct', action.payload);
        const newAction = { type: 'FETCH_PRODUCT_TYPE' };
        yield put(newAction);
    } catch (error) {
        console.log('Create product type request failed', error);
    }
};

//fetch product type
function* fetchProductType() {
    try {
        const responseFromServer = yield axios.get('/api/productType');
        const nextAction = { type: 'GET_PRODUCT_TYPE', payload: responseFromServer.data };
        yield put(nextAction);
    } catch (error) {
        console.log('Fetch product type request failed', error);
    }
};

//update product type
function* updateProductType(action) {
    let PTID = action.payload.id;
    console.log('in updateProductType payload', action.payload);
    try {
        yield axios.put(`api/productType/${PTID}`, action.payload)
        const nextAction = { type: 'FETCH_PRODUCT_TYPE', };
        yield put(nextAction);
    } catch (error) {
        console.log('Update product type request failed', error);
    }
};

//delete product type
function* deleteProductType(action) {
    let PTID = action.payload.id;
    console.log('in deleteProductType payload', action.payload);
    try {
        yield axios.delete(`api/productType/${PTID}`);
        let nextAction = { type: 'FETCH_PRODUCT_TYPE' };
        yield put(nextAction);
    } catch (error) {
        console.log('Delete product type request failed', error);
    }
};

export default productTypeSaga;


