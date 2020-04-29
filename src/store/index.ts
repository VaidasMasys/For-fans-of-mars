import { combineReducers, createStore, applyMiddleware } from 'redux';
import { weatherReducer } from './marsApi/reducer';
import thunk from 'redux-thunk';
import { WeatherDataState } from './marsApi/types';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IRootState {
    marsWeather: WeatherDataState;
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        marsWeather: weatherReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
