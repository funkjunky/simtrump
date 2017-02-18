export const queueQuestion = (question, date) => ({
    type: 'QUEUE_QUESTION',
    question,
    date
});

export const popQuestion = () => ({
    type: 'POP_QUESTION'
});
