import { action } from 'typesafe-actions';
import axios from 'axios';
import { Constants } from './types';
import { Dispatch } from 'redux';
import { MarsDayData } from '../../types';

export const fetchWeatherRequest = () => {
    return action(Constants.FETCH_WEATHER_DATA_REQUEST);
};

export const fetchWeatherSuccess = (weather: MarsDayData) => {
    return action(Constants.FETCH_WEATHER_DATA_SUCCESS, {
        weather,
    });
};

export const fetchWeatherFailure = (error: string) => {
    return action(Constants.FETCH_WEATHER_DATA_FAILURE, error);
};

export const fetchWeather = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchWeatherRequest());
        axios
            .get(
                'https://api.nasa.gov/insight_weather/?api_key=pIwfkyUZDPOcZZu6Pv1uc7g2Zl7YBI8mkbn6PDHU&feedtype=json&ver=1.0',
            )
            .then((response: { data: MarsWeather }) => {
                const lastDay = response.data.sol_keys[response.data.sol_keys.length - 1];

                const latestWeatherData = { ...response.data[lastDay], solDay: lastDay };

                dispatch(fetchWeatherSuccess(latestWeatherData));
            })
            .catch((error: string) => {
                dispatch(fetchWeatherFailure(error));
            });
    };
};
