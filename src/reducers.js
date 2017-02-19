import { combineReducers } from 'redux';
import buttons from './reducers/buttons';
import queue from './reducers/queue';
import asking from './reducers/asking';
import answered from './reducers/answered';
import game from './reducers/game';

const reducers = combineReducers({
    buttons,
    game,
    asking,
    answered
});

export default reducers;
