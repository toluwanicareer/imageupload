import { imageReducer } from "./image"
import {createStore,  combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


export const ConfigureStore = (state, action) => {
    const store = createStore(
        combineReducers({
            imageReducer,
        }, applyMiddleware)
     );
    return store
}