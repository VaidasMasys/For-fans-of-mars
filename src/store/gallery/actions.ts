import { action } from 'typesafe-actions';
import { Constants } from './types';
import { MarsRoverPhotosData } from '../../types';

export const getActivePhotoData = () => {
    return action(Constants.GET_ACTIVE_PHOTO_DATA);
};

export const setActivePhotoData = (photoData: MarsRoverPhotosData) => {
    return action(Constants.SET_ACTIVE_PHOTO_DATA, photoData);
};
