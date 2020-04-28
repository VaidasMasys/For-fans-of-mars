import { action } from 'typesafe-actions';
import axios from 'axios';
import { Constants } from './types';

// export function fetchWeatherData(item: string) {
//     // axios
//     //     .get(
//     //         'https://api.nasa.gov/insight_weather/?api_key=pIwfkyUZDPOcZZu6Pv1uc7g2Zl7YBI8mkbn6PDHU&feedtype=json&ver=1.0',
//     //     )
//     //     .then((response) => {
//     //         console.log('this is response', response);
//     //     });
// return action(Constants.FETCH_WEATHER_DATA_SUCCESS, {
//     item,
// });
// }

// export function setLoading(loading: boolean) {
//     // return action(Constants.SET_LOADING, {
//     //     loading,
//     // });
// }

export const fetchWeatherRequest = () => {
    return action(Constants.FETCH_WEATHER_DATA_REQUEST);
};

export const fetchWeatherSuccess = (weather: any) => {
    return action(Constants.FETCH_WEATHER_DATA_SUCCESS, {
        weather,
    });
};

export const fetchWeatherFailure = (error: any) => {
    return action(Constants.FETCH_WEATHER_DATA_FAILURE, {
        error,
    });
};

export const fetchWeather = () => {
    console.log('is this called?');
    return (dispatch: any) => {
        dispatch(fetchWeatherRequest());
        axios
            .get(
                'https://api.nasa.gov/insight_weather/?api_key=pIwfkyUZDPOcZZu6Pv1uc7g2Zl7YBI8mkbn6PDHU&feedtype=json&ver=1.0',
            )
            .then((response) => {
                dispatch(fetchWeatherSuccess(response.data));
            })
            .catch((error: string) => {
                dispatch(fetchWeatherFailure(error));
            });
    };
};
