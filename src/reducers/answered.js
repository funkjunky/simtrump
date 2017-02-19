import { defaultResponses } from '../questions';

const answered = (state = [], { type, question, button }) => {
    switch(type) {
        case 'ANSWER_QUESTION':
            if(!question)
                question = { responses: defaultResponses };
            return state.concat([question.responses[button]]);
        default:
            return state;
    }
};

export default answered;
