import { action } from 'typesafe-actions';
import axios from 'axios';
import { Constants } from './types';
import { Dispatch } from 'redux';
import { MarsDayData, MarsRoverPhotosData, MarsWeather } from '../../types';
import { setActivePhotoData } from '../gallery/actions';

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
                const latestWeatherData: MarsDayData = { ...response.data[lastDay], solDay: lastDay } as MarsDayData;
                dispatch(fetchWeatherSuccess(latestWeatherData));
            })
            .catch((error: string) => {
                dispatch(fetchWeatherFailure(error));
            });
    };
};

export const fetchRoverPhotosRequest = () => {
    return action(Constants.FETCH_ROVER_PHOTOS_REQUEST);
};

export const fetchRoverPhotosSuccess = (roverPhotos: MarsRoverPhotosData[]) => {
    return action(Constants.FETCH_ROVER_PHOTOS_SUCCESS, roverPhotos);
};

export const fetchRoverPhotosFailure = (error: string) => {
    return action(Constants.FETCH_ROVER_PHOTOS_FAILURE, error);
};

export const fetchRoverPhotos = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchRoverPhotosRequest());
        axios
            .get(
                'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-5-1&camera=NAVCAM&api_key=pIwfkyUZDPOcZZu6Pv1uc7g2Zl7YBI8mkbn6PDHU&feedtype=json&ver=1.0',
            )
            .then((response) => {
                dispatch(fetchRoverPhotosSuccess(response.data.photos));
                dispatch(setActivePhotoData(response.data.photos[0]));
            })
            .catch((error: string) => {
                dispatch(fetchWeatherFailure(error));
            });
    };
};
