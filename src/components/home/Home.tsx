import React, { useEffect } from 'react';
import styles from './Home.module.scss';
import Header from '../header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../store';
import { fetchWeather } from '../../store/marsApi/asyncActions';
import { MarsDayData } from '../../types';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchWeather());
    }, []);

    const marsWeather: MarsDayData = useSelector((state: IRootState) => state.marsWeather.weatherData.weather);

    return (
        <div className={styles.container}>
            <div className={styles.homeBackground}></div>
            <Header />
            <div className={styles.weatherDataWrapper}>
                <div className={styles.weatherDataContainer}>
                    <h1 className={styles.weatherDataHeader}>LATEST WEATHER ON MARS</h1>
                    <div className={styles.weatherDataItem}>
                        <h2 className={styles.dayHeader}>
                            Sol
                            <span> {marsWeather?.solDay}</span>
                        </h2>
                        <p className={styles.dateDay}>{`${new Date(marsWeather?.Last_UTC).toLocaleString('default', {
                            month: 'long',
                        })} ${new Date(marsWeather?.Last_UTC).getDate()}`}</p>
                    </div>
                    <div className={styles.weatherDataItem}>
                        <h2 className={styles.sectionHeader}>Temperature</h2>
                        <p className={styles.reading}>
                            High:
                            <span>{marsWeather?.AT?.mx}</span>°<span></span>
                        </p>
                        <p className={styles.reading}>
                            Low:
                            <span>{marsWeather?.AT?.mn}</span>°<span></span>
                        </p>
                    </div>
                    <div className={styles.weatherDataItem}>
                        <h2 className={styles.sectionHeader}>Wind</h2>
                        <p className={styles.reading}>
                            <span>{marsWeather?.HWS?.av}</span>
                            <span> kph</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
