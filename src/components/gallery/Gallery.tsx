import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRoverPhotos } from '../../store/marsApi/asyncActions';
import styles from './Gallery.module.scss';
import ActiveGalleryWindow from './ActiveGalleryWindow';
import GalleryGrid from './GalleryGrid';
import ActiveGalleryItemInfoDisplay from './ActiveGalleryItemInfoDisplay';

const Gallery = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRoverPhotos());
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.photos}>
                <div className={styles.activeGalleryWindow}>
                    <ActiveGalleryWindow />
                </div>
                <div className={styles.ActiveGalleryItemInfoDisplay}>
                    <ActiveGalleryItemInfoDisplay />
                </div>
                <div className={styles.GalleryGrid}>
                    <GalleryGrid />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
