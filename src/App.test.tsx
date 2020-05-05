import React from 'react';

import { shallow } from 'enzyme';
import App from './App';
import Home from './components/home/Home';

describe('App component', () => {
    it('checks if App rendered Home component', () => {
        const wrapper = shallow(<App />);
        const home = wrapper.find(Home);
        expect(home.exists()).toBe(true);
    });
});
