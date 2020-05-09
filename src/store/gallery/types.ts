import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
export type GalleryActions = ActionType<typeof actions>;

export enum Constants {
    SET_ACTIVE_PHOTO_DATA = 'SET_ACTIVE_PHOTO_DATA',
    GET_ACTIVE_PHOTO_DATA = 'GET_ACTIVE_PHOTO_DATA',
}
