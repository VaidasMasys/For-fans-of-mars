import { combineReducers, createStore, applyMiddleware } from 'redux';
import { weatherReducer } from './marsApi/reducer';
import thunk from 'redux-thunk';

export interface IRootState {
    marsWeather: any;
}
const store = createStore<IRootState, any, any, any>(
    combineReducers({
        marsWeather: weatherReducer,
    }),
    applyMiddleware(thunk),
);
export default store;
