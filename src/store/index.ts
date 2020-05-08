import { combineReducers, createStore, applyMiddleware } from 'redux';
import { weatherReducer, roverPhotosReducer } from './marsApi/reducer';
import thunk from 'redux-thunk';
import { WeatherDataState, RoverPhotosState } from './marsApi/types';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IRootState {
    marsWeather: WeatherDataState;
    marsRoverPhotos: RoverPhotosState;
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        marsWeather: weatherReducer,
        marsRoverPhotos: roverPhotosReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
