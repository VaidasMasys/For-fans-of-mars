import React from 'react';

import { shallow } from 'enzyme';
import App from './App';
import Weather from './components/weather/Weather';

describe('App component', () => {
    it('checks if App rendered Weather component', () => {
        const wrapper = shallow(<App />);
        const weather = wrapper.find(Weather);
        expect(weather.exists()).toBe(true);
    });
});
