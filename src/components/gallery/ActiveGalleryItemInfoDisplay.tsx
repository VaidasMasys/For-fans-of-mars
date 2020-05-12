import React from 'react';
import styles from './ActiveGalleryItemInfoDisplay.module.scss';
import { MarsRoverPhotosData } from '../../types';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

const ActiveGalleryItemInfoDisplay = () => {
    const activePhoto: MarsRoverPhotosData = useSelector((state: IRootState) => state.activePhotoData);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>About the photo:</h1>
                <p>
                    Rover that took this picture: <strong>{activePhoto.rover?.name}</strong>
                </p>
                <p>
                    Camera name: <strong>{activePhoto.camera?.full_name}</strong>
                </p>
                <p>
                    Sol: <strong> {activePhoto.sol}</strong>{' '}
                </p>
                <p>
                    Earth date:{' '}
                    <time>
                        <strong>{activePhoto.earth_date}</strong>
                    </time>
                </p>
            </div>
        </div>
    );
};

export default ActiveGalleryItemInfoDisplay;
