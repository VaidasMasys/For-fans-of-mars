import { ActionType } from 'typesafe-actions';
import * as actions from './asyncActions';
import { MarsDayData } from '../../types';
export type DemoActions = ActionType<typeof actions>;

export interface WeatherDataState {
    weatherData: { weather: MarsDayData };
    loading: boolean;
    error: string;
}

export enum Constants {
    FETCH_WEATHER_DATA_REQUEST = 'FETCH_WEATHER_DATA_REQUEST',
    FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS',
    FETCH_WEATHER_DATA_FAILURE = 'FETCH_WEATHER_DATA_FAILURE',
}
