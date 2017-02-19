const asking = (state = [], { type, question, button }) => {
    switch(type) {
        case 'ASK_QUESTION':
            const region = question.region;
            question = question.question;
            return state.concat([{ question, region }]);
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
