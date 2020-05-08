import { ActionType } from 'typesafe-actions';
import * as actions from './asyncActions';
import { MarsDayData, MarsRoverPhotosData } from '../../types';
export type MarsActions = ActionType<typeof actions>;

export interface WeatherDataState {
    weatherData: { weather: MarsDayData };
    loading: boolean;
    error: string;
}

export interface RoverPhotosState {
    roverPhotos: MarsRoverPhotosData[];
    loading: boolean;
    error: string;
}

export enum Constants {
    FETCH_WEATHER_DATA_REQUEST = 'FETCH_WEATHER_DATA_REQUEST',
    FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS',
    FETCH_WEATHER_DATA_FAILURE = 'FETCH_WEATHER_DATA_FAILURE',
    FETCH_ROVER_PHOTOS_REQUEST = 'FETCH_ROVER_PHOTOS_REQUEST',
    FETCH_ROVER_PHOTOS_SUCCESS = 'FETCH_ROVER_PHOTOS_SUCCESS',
    FETCH_ROVER_PHOTOS_FAILURE = 'FETCH_ROVER_PHOTOS_FAILURE',
}
