//SET_PRODUCT_TYPE

import { combineReducers } from 'redux';

//product type reducer which creates, grabs, updates, and delete product type
//all information is sent via object
const productTypeReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_PRODUCT_TYPE':
            return action.payload;
        case 'CREATE_PRODUCT_TYPE':
            return action.payload;
        case 'UPDATE_PRODUCT_TYPE':
            return action.payload;
        case 'DELETE_PRODUCT_TYPE':
            return action.payload;
        default:
            return state;
    }
};

//takes ID of item and updates or deletes product type
// const updateAndDeletePTReducer = (state = '', action) => {
//     switch(action.type) {
//         case 'UPDATE_PRODUCT_TYPE':
//             return action.payload;
//         case 'DELETE_PRODUCT_TYPE':
//             return action.payload;
//         default:
//             return state;
//     }
// };

export default combineReducers({
    productTypeReducer,
    // updateAndDeletePTReducer,
})