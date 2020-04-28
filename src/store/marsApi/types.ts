import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
export type DemoActions = ActionType<typeof actions>;

export interface WeatherDataState {
    weatherData: any;
    loading: boolean;
    error: any;
}

export enum Constants {
    FETCH_WEATHER_DATA_REQUEST = 'FETCH_WEATHER_DATA_REQUEST',
    FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS',
    FETCH_WEATHER_DATA_FAILURE = 'FETCH_WEATHER_DATA_FAILURE',
}
