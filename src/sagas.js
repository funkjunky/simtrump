import tick from './sagas/tick';
import buttonUpWatcher from './sagas/tick/buttonUp';

const sagas = function*() {
    yield [
        tick(),
        buttonUpWatcher()
    ];
};

export default sagas;
