//SET_PRODUCT_TYPE
// productType reducer
const productType = (state = [], action) => {
    if (action.type === 'SET_PRODUCT_TYPE') {
        return action.payload
    }
    return state;
}
export default productType;

// end productType reducer