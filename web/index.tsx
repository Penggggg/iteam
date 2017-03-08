import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import states from './store/reducer';
import routes from './page';
import './index.d';

const store = createStore( states );

class App extends React.PureComponent<{ }, { }> {

    constructor( ) {super( )}

    render( ) {
        return <Provider store={ store }>
            <Router routes={ routes } history={ hashHistory } />
        </Provider>
    }

}

ReactDom.render(
    <App />,
    document.querySelector('#app')
)