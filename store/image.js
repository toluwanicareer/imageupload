import * as ActionTypes from './atype';

export const imageReducer = (state = {}, action) => {
  switch (action.type) {

    case ActionTypes.ADD_IMAGE:
      return { ...state, image: action.payload }
    default:
        return state
  }
}