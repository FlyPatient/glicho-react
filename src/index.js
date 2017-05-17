import React from 'react';
import { render } from 'react-dom';

import { Router } from './components/router/Router';
import { Route } from './components/router/Route';
import { history } from './history/history';

import { App } from './containers/App';
import { Home } from './containers/Home';
import { BookBox } from './pages/BookBox';

const renderApp = (state) => {
   render(
        <Router {...state}> 
            <Route path="/" index={Home} component={App}> 
                <Route path="books/:categoryId/:name" component={BookBox} />
            </Route> 
        </Router>,
        document.getElementById('app')
    )
}; 

const initialState = {
    location: window.location.pathname
}

function activateHistoryListener() {
    history.listen((location) => {
        const newState = Object.assign(initialState, {location: location.pathname});
        renderApp(newState);
    });
}

renderApp(initialState);
activateHistoryListener();