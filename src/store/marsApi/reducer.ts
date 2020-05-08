import { WeatherDataState, MarsActions, RoverPhotosState } from './types';
import { Constants } from './types';
import { MarsDayData } from '../../types';

// MARS WEATHER REDUCER

const initialWeatherState: WeatherDataState = {
    weatherData: { weather: new MarsDayData() },
    loading: false,
    error: '',
};

export function weatherReducer(state: WeatherDataState = initialWeatherState, action: MarsActions): WeatherDataState {
    switch (action.type) {
        case Constants.FETCH_WEATHER_DATA_REQUEST:
            return { ...state, loading: true };
        case Constants.FETCH_WEATHER_DATA_SUCCESS:
            return { ...state, weatherData: action.payload, loading: false };
        case Constants.FETCH_WEATHER_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

// ROVER PHOTOS REDUCER

const initialRoverPhotosState: RoverPhotosState = {
    roverPhotos: [],
    loading: false,
    error: '',
};

export function roverPhotosReducer(
    state: RoverPhotosState = initialRoverPhotosState,
    action: MarsActions,
): RoverPhotosState {
    switch (action.type) {
        case Constants.FETCH_ROVER_PHOTOS_REQUEST:
            return { ...state, loading: true };
        case Constants.FETCH_ROVER_PHOTOS_SUCCESS:
            return { ...state, roverPhotos: action.payload, loading: false };
        case Constants.FETCH_ROVER_PHOTOS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
