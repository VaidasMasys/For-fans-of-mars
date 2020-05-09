import { combineReducers, createStore, applyMiddleware } from 'redux';
import { weatherReducer, roverPhotosReducer } from './marsApi/reducer';
import { galleryReducer } from './gallery/reducer';
import thunk from 'redux-thunk';
import { WeatherDataState, RoverPhotosState } from './marsApi/types';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MarsRoverPhotosData } from '../types';

export interface IRootState {
    marsWeather: WeatherDataState;
    marsRoverPhotos: RoverPhotosState;
    activePhotoData: MarsRoverPhotosData;
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        marsWeather: weatherReducer,
        marsRoverPhotos: roverPhotosReducer,
        activePhotoData: galleryReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
