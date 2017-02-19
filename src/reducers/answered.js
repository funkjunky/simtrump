import { defaultResponses, extraResponse } from '../questions';

const answered = (state = [], { type, question, button }) => {
    switch(type) {
        case 'ANSWER_QUESTION':
            if(!question)
                question = { responses: defaultResponses };
            if(button === 'a')
                return state.concat([ extraResponse.messages[0] ]);
            else
                return state.concat([question.responses[button].messages[0]]);
        default:
            return state;
    }
};

export default answered;
