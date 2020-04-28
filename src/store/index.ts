import { combineReducers, createStore, applyMiddleware } from 'redux';
import { weatherReducer } from './marsApi/reducer';
import thunk from 'redux-thunk';
import { WeatherDataState } from './marsApi/types';

export interface IRootState {
    marsWeather: WeatherDataState;
}
const store = createStore<IRootState, any, any, any>(
    combineReducers({
        marsWeather: weatherReducer,
    }),
    applyMiddleware(thunk),
);
export default store;
