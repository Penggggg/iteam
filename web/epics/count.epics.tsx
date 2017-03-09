
import { Observable } from 'rxjs/observable';
import { IReduxActionOnlyType } from '../interface/redux.interface';
import { Counter_Add, Counter_Del } from '../store/action';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';

export let countAddEpic = ( action$: Observable<IReduxActionOnlyType> ) => 
    action$
        .filter( action => action.type === Counter_Add )
        .delay( 1500 )
        .mapTo({ type: Counter_Del })
