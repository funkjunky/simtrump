import tick from './sagas/tick';

const sagas = function*() {
    yield [
        tick()
    ];
};

export default sagas;
