import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';
import states from './store/reducer';
import routes from './page';
import './index.d';


const epicMiddleware = createEpicMiddleware( epics );
const store = createStore( states, applyMiddleware( epicMiddleware ));

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