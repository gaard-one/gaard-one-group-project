//SET_PRODUCT
const product = (state = [], action) => {
    if (action.type === 'SET_PRODUCT'){
        return action.payload
    }
    return state;
}
export default product;