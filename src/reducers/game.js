const initialState = {
    date: new Date('January 20, 2017 9:00:00'),
    scores: {
        russia: 20, //%
        protest: 22, // mil
        reddit: 371,  //k subs
        dollars: 1,  //$123b
    }
};

const TIME_MODIFIER = 1000 * 60 / 2;
const game = (state = initialState, { type, dt }) => {
    switch(type) {
        case 'INC_DATE':
            return {
                ...state,
                date: new Date(state.date.getTime() + dt * TIME_MODIFIER)
            };
        case 'ANSWER_QUESTION':
            let newScores = { ...state.scores };
            if(Math.random() < 0.30)
                newScores.russia += 5 + Math.floor(Math.random()*10);
            else if(Math.random() < 0.30)
                newScores.protest += 10 + Math.floor(Math.random()*15);
            else if(Math.random() < 0.30)
                newScores.reddit += 50 + Math.floor(Math.random()*200);
            else
                newScores.dollars += 1 + Math.floor(Math.random()*4);
            return {
                ...state,
                scores: newScores,
            };

        default:
            return state;
    }
};

export default game;
