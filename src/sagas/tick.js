import { take } from 'redux-saga/effects';

import tickPhysicsSaga from './tick/physics';
import tickDirectorSaga from './tick/director';
import { INTERVAL_TICK } from '../middlewares/reduxinterval';

const tick = function* () {
    while(true) {
        const action = yield take(INTERVAL_TICK);
        yield tickPhysicsSaga(action);
        yield tickDirectorSaga(action);
    }
};

export default tick;
