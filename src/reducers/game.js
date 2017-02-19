const initialState = {
    date: new Date('January 20, 2017 9:00:00')
};

const TIME_MODIFIER = 1000 * 60 / 2;
const game = (state = initialState, { type, dt }) => {
    switch(type) {
        case 'INC_DATE':
            return {
                ...state,
                date: new Date(state.date.getTime() + dt * TIME_MODIFIER)
            };
        default:
            return state;
    }
};

export default game;
