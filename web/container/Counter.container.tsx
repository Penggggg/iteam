import { connect } from 'react-redux';
import Counter from '../component/Counter.component';
import { IReducerAll, IDispatch } from '../interface/redux.interface';
import { Counter_Del, Counter_Add } from '../store/action';


let mapStateToProps = ( state: IReducerAll ) => ({ count: state.CountState });

let mapDispatchToProps = ( dispatch: IDispatch ) => ({ 
    onAdd: ( event: any ) => dispatch({ type: Counter_Add }),
    onDel: ( event: any ) => dispatch({ type: Counter_Del }) 
})

export default connect( mapStateToProps, mapDispatchToProps )( Counter )
