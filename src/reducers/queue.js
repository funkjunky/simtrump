const initialState = [];

const getRandomRegion = () => [
    'up', 'down', 'left', 'right'
][Math.floor(Math.random() * 4)];


let id = 0;
const queue = (state = initialState, { type, question, date }) => {
    switch(type) {
        case 'QUEUE_QUESTION':
            return state.concat([{ id: id++, date, question, region: getRandomRegion() }]);
        case 'ASK_QUESTION':
            return state.filter(q => q.id !== question.id);
        default:
            return state;
    }
};

export default queue;
