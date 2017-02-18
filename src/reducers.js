import { combineReducers } from 'redux';

import balls from './reducers/balls';
import walls from './reducers/walls';
import game from './reducers/game';

const reducers = combineReducers({
    balls,
    walls,
    game
});

export default reducers;
