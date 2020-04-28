import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Home from './components/home/Home';
import './App.scss';

import { useSelector } from 'react-redux';
import { IRootState } from './store';
import { fetchWeather } from './store/marsApi/actions';
// import { fetchWeather }

// eslint-disable-next-line react/prop-types
function App({ fetchWeather }: any) {
    useEffect(() => {
        fetchWeather();
    }, []);
    const marsWeather: any = useSelector((state: IRootState) => state.marsWeather);
    console.log('this is mars weather from state', marsWeather);
    return (
        <div className="App">
            {/* <ul>
                {marsWeather?.list.map((i: string, index: number) => (
                    <li key={index}>{i}</li>
                ))}
            </ul> */}
            {/* <Home></Home> */}
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return { weatherData: state.weatherData };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchWeather: () => dispatch(fetchWeather()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
