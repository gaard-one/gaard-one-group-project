//SET_DISPLAY_SQUARE
const displaySquare = (state=[], action) => {
    switch (action.type) {
      case 'SET_DISPLAY_SQUARE':
        return action.payload;
      default:
        return state;
    }
  }

export default displaySquare;