const asking = (state = [], { type, question }) => {
    switch(type) {
        case 'ASK_QUESTION':
            return state.concat([question]);
        default:
            return state;
    }
};

export default asking;
