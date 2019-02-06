import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, withRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducer, applyMiddleware(thunk))
const AppWithRouter = withRouter(App)

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <AppWithRouter />
        </Provider>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
