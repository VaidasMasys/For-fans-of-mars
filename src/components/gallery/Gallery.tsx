import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRoverPhotos } from '../../store/marsApi/asyncActions';
import styles from './Gallery.module.scss';
import ActiveGalleryWindow from './ActiveGalleryWindow';
import GalleryGrid from './GalleryGrid';

const Gallery = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRoverPhotos());
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.photos}>
                <ActiveGalleryWindow />
                <GalleryGrid />
            </div>
            <div className={styles.description}>Right</div>
        </div>
    );
};

export default Gallery;
