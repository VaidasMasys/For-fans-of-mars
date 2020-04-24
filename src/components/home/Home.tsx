import React, { Component } from 'react';
import styles from './Home.module.scss';
import Header from '../header/Header';

class Home extends Component {
    state: { solData: TransformedSoldata[] } = {
        solData: [],
    };
    componentDidMount() {
        const apiUrl =
            'https://api.nasa.gov/insight_weather/?api_key=pIwfkyUZDPOcZZu6Pv1uc7g2Zl7YBI8mkbn6PDHU&feedtype=json&ver=1.0';

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data: MarsWeather) => {
                const { sol_keys, validity_checks, ...solData } = data;

                // const transformedSoldata: TransformedSoldata[] = Object.entries(solData).map(([sol, data]) => {
                //     console.log('sss', data);
                //     return {
                //         sol: sol,
                //         maxTemp: data.AT.mx,
                //         minTemp: data.AT.mn,
                //         windSpeed: data.HWS.av,
                //         windDirectionDegrees: data.WD.most_common.compass_degrees,
                //         lastDate: `${new Date(data.Last_UTC).toLocaleString('default', { month: 'long' })} ${new Date(
                //             data.Last_UTC,
                //         ).getDate()}`,
                //     };
                // });

                // this.setState({ solData: transformedSoldata });
                // console.log('sol data', solData['483'].WD);
            });
    }
    render() {
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
                                <span> {this.state.solData[this.state.solData.length - 1]?.sol}</span>
                            </h2>
                            <p className={styles.dateDay}>
                                {this.state.solData[this.state.solData.length - 1]?.lastDate}
                            </p>
                        </div>
                        <div className={styles.weatherDataItem}>
                            <h2 className={styles.sectionHeader}>Temperature</h2>
                            <p className={styles.reading}>
                                High:
                                <span>{this.state.solData[this.state.solData.length - 1]?.maxTemp}</span>°<span></span>
                            </p>
                            <p className={styles.reading}>
                                Low:
                                <span>{this.state.solData[this.state.solData.length - 1]?.minTemp}</span>°<span></span>
                            </p>
                        </div>
                        <div className={styles.weatherDataItem}>
                            <h2 className={styles.sectionHeader}>Wind</h2>
                            <p className={styles.reading}>
                                <span>{this.state.solData[this.state.solData.length - 1]?.windSpeed}</span>
                                <span> kph</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
