import * as React from 'react';
import Counter from '../container/Counter.container';

export default class HomePage extends React.PureComponent<{ }, { }> {
    constructor( ) {
        super( );
    }

    render( ) {
        return <div>
            Home
            <Counter />
        </div>
    }
}