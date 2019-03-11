import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//fetch plot
function* fetchPlot(action) {
    try {
        const response = yield axios.get(`api/plot/${action.payload}`);
    
        //sends array of rows for plot
        yield put({ type: 'SET_DISPLAY_SQUARE', payload: response.data });
    
      } catch (error) {
        console.log('Plot get request failed', error);
      }
}

//update plot
//will be used to update user for a plot (stretch)


function* plotSaga() {
  yield takeLatest('FETCH_PLOT', fetchPlot);
}

export default plotSaga;