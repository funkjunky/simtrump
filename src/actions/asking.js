export const askQuestion = question => ({
    type: 'ASK_QUESTION',
    question
});

export const answerQuestion = (button, question) => ({
    type: 'ANSWER_QUESTION',
    button,
    question
});
