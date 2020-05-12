import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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

    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.photos}>
                <div className={styles.datePicker}>
                    <label className={styles.datePickerLabel}>Pick a date</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                            setSelectedDate(date);
                        }}
                        maxDate={new Date()}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
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
