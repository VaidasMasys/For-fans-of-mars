import React from 'react';
import styles from './ActiveGalleryWindow.module.scss';
import { MarsRoverPhotosData } from '../../types';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

const ActiveGalleryWindow = () => {
    const marsPhotos: MarsRoverPhotosData[] = useSelector((state: IRootState) => state.marsRoverPhotos.roverPhotos);
    console.log('marsphotos', marsPhotos);
    const activePhoto: MarsRoverPhotosData = useSelector((state: IRootState) => state.activePhotoData);
    return (
        <div className={styles.container}>
            {marsPhotos.length > 0 ? <img src={activePhoto.img_src} alt="image from mars rover" /> : ''}
        </div>
    );
};

export default ActiveGalleryWindow;
