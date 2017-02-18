import { put } from 'redux-saga/effects';

import { applyVelocityToBalls } from '../../actions/balls.js';

function* tickPhysicsSaga({ dt }) {
    yield put(applyVelocityToBalls(dt / 1000));
};

export default tickPhysicsSaga;
