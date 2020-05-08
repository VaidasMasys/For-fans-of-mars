import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/home/Home';
import Gallery from './components/gallery/Gallery';
import './App.scss';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
