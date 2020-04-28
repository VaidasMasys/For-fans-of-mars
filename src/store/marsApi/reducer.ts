import { WeatherDataState, DemoActions } from './types';
import { Constants } from './types';

const initialState: WeatherDataState = {
    weatherData: {},
    loading: false,
    error: '',
};

export function weatherReducer(state: WeatherDataState = initialState, action: DemoActions): WeatherDataState {
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
