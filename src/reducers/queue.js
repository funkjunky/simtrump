const initialState = [];

let id = 0;
const queue = (state = initialState, { type, question, date }) => {
    switch(type) {
        case 'QUEUE_QUESTION':
            return state.concat([{ id: id++, date, question }]);
        case 'ASK_QUESTION':
            return state.filter(q => q.id !== question.id);
        default:
            return state;
    }
};

export default queue;
