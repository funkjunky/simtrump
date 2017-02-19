import { put, select, call, take } from 'redux-saga/effects';
import { answerQuestion } from '../../actions/asking';
import { defaultResponses } from '../../questions';

const buttonUpWatcher = function*() {
    while(true){
        const action = yield take('BUTTON_UP');
        yield call(buttonUpSaga, action);
    }
};

const buttonUpSaga = function*({ button }) {
    const { buttons, asking } = yield select();

    //first do we use a region?
    if(buttons.up && asking.find(a => a.region === 'up'))
        yield put(answerQuestion(button, asking.find(a => a.region === 'up')));
    else if(buttons.down && asking.find(a => a.region === 'down'))
        yield put(answerQuestion(button, asking.find(a => a.region === 'down')));
    else if(buttons.left && asking.find(a => a.region === 'left'))
        yield put(answerQuestion(button, asking.find(a => a.region === 'left')));
    else if(buttons.right && asking.find(a => a.region === 'right'))
        yield put(answerQuestion(button, asking.find(a => a.region === 'right')));
    else
        yield put(answerQuestion(button));
};

export default buttonUpWatcher;
