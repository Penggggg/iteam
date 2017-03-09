
import { combineEpics } from 'redux-observable';
import { countAddEpic } from './count.epics';

export default combineEpics( countAddEpic );