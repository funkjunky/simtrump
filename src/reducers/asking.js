const asking = (state = [], { type, question, button }) => {
    switch(type) {
        case 'ASK_QUESTION':
            return state.concat([question]);
        //remove answered question
        case 'ANSWER_QUESTION':
            return state.filter(q => q.id !== question.id);
        default:
            return state;
    }
};

export default asking;
