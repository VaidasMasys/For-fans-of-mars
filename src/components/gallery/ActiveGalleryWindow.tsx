import React from 'react';
import styles from './ActiveGalleryWindow.module.scss';
import { MarsRoverPhotosData } from '../../types';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

const ActiveGalleryWindow = () => {
    const activePhoto: MarsRoverPhotosData = useSelector((state: IRootState) => state.activePhotoData);
    return (
        <div className={styles.container}>
            {activePhoto !== undefined ? <img src={activePhoto.img_src} alt="selected photo from mars rover" /> : ''}
        </div>
    );
};

export default ActiveGalleryWindow;
