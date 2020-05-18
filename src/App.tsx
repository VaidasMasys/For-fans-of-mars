import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Weather from './components/weather/Weather';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import Home from './components/home/Home';
import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="appBackground"></div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/weather" component={Weather} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
