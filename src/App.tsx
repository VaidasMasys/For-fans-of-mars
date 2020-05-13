import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Weather from './components/weather/Weather';
import Gallery from './components/gallery/Gallery';
import './App.scss';
import Header from './components/header/Header';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Weather} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
