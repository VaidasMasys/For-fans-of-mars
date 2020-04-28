import { Dispatch } from 'redux';
import * as actions from './actions';
import axios from 'axios';
import { DemoActions } from './types';

export function fetchWeatherData(dispatch: Dispatch<DemoActions>, item: string) {
    // dispatch(actions.setLoading(true));
    // dispatch(actions.fetchWeatherData(item));
    // dispatch(actions.setLoading(false));
    //   axios
    //       .get(
    //           'https://api.nasa.gov/insight_weather/?api_key=pIwfkyUZDPOcZZu6Pv1uc7g2Zl7YBI8mkbn6PDHU&feedtype=json&ver=1.0',
    //       )
    //       .then((response) => {
    //           console.log('this is response', response);
    //       });
}
