const initialState = {
    ballCD: 0
};

const game = (state = initialState, action) => {
    switch(action.type) {
        case 'REDUCE_BALL_CD':
            return {
                ...state,
                ballCD: state.ballCD - action.dt
            };
        case 'SET_BALL_CD':
            return {
                ...state,
                ballCD: action.ballCD
            };
        default:
            return state;
    }
};

export default game;
