import React from 'react';
import styles from './GalleryGrid.module.scss';
import GalleryGridItem from './GalleryGridItem';
import { MarsRoverPhotosData } from '../../types';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

const GalleryGrid = () => {
    const marsPhotos: MarsRoverPhotosData[] = useSelector((state: IRootState) => state.marsRoverPhotos.roverPhotos);

    return (
        <div className={styles.container}>
            {marsPhotos.map((item, index) => (
                <GalleryGridItem key={index} item={item} />
            ))}
        </div>
    );
};

export default GalleryGrid;
