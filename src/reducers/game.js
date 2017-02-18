const initialState = {
    date: new Date('January 20, 2017 9:00:00')
};

const TIME_MODIFIER = 60 * 60 * 6;  //4 seconds a day
const game = (state, { type, dt }) => {
    switch(type) {
        case 'INC_DATE':
            return {
                ...state,
                date: date + dt * timeModifier
            };
        default:
            return state;
    }
};

export default game;
