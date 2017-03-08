import { IReduxActionOnlyType } from '../../interface/redux.interface';
import { Counter_Add, Counter_Del } from '../action';

export let CountState = ( state = 1, action: IReduxActionOnlyType ) => {
    switch ( action.type ) {
        case Counter_Add: {
            return ++state;
        };
        case Counter_Del: {
            return --state;
        };
        default: return state;
    }
}