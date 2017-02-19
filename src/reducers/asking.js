const asking = (state = [], { type, question, button }) => {
    switch(type) {
        case 'ASK_QUESTION':
            return state.concat([question.question]);
        //remove answered question
        case 'ANSWER_QUESTION':
            if(question)
                return state.filter(q => q.id !== question.id);
            else
                return state;
        default:
            return state;
    }
};

export default asking;
