import * as ActionTypes from './atype';

export const addImage = (imageUri)=>({
    type: ActionTypes.ADD_IMAGE,
    payload: imageUri
})

