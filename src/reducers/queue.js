const initialState = [];

const queue = (state = initialState, { type, question, date }) => {
    switch(type) {
        case 'QUEUE_QUESTION':
            return state.concat([{ date, question }]);
        case 'POP_QUESTION':
            const [ popped, ...theRest ] = state;
            return theRest;
        default:
            return state;
    }
};

export default queue;
