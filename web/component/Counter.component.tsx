import * as React from 'react';

export default class Counter extends React.PureComponent< IProps, { }> {

    constructor( ) {
        super( );
    }

    render( ) {
        let { count, onAdd, onDel } = this.props;
        return <div>
            <h3>{ count }</h3>
            <button onClick={onAdd}>+</button>
            <button onClick={onDel}>-</button>
        </div>
    }

}

interface IProps {
    count: number
    onAdd: (event: any) => void
    onDel: (event: any) => void
}