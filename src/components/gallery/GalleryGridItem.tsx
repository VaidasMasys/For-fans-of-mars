import React from 'react';
import styles from './GalleryGridItem.module.scss';
import { MarsRoverPhotosData } from '../../types';
import { useDispatch } from 'react-redux';
import { setActivePhotoData } from '../../store/gallery/actions';

const GalleryGridItem = (props: { item: MarsRoverPhotosData }) => {
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => {
                dispatch(setActivePhotoData(props.item));
            }}
            className={styles.container}
        >
            <img src={props.item.img_src} alt="Mars rover photo" />
        </div>
    );
};

export default GalleryGridItem;
