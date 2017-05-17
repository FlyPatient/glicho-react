import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export const navigate = to => history.push(to); 