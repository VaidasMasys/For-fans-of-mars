import { MarsRoverPhotosData } from '../../types';
import { GalleryActions } from './types';
import { Constants } from './types';

const initialState: MarsRoverPhotosData = new MarsRoverPhotosData();

export function galleryReducer(state: MarsRoverPhotosData = initialState, action: GalleryActions): MarsRoverPhotosData {
    switch (action.type) {
        case Constants.GET_ACTIVE_PHOTO_DATA:
            return state;
        case Constants.SET_ACTIVE_PHOTO_DATA:
            return action.payload;
        default:
            return state;
    }
}
