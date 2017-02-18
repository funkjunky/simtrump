import ball from './balls/ball';

const balls = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BALL':
            return [ ...state, ball(undefined, action) ];
        case 'REMOVE_BALL':
            return state.filter(b => b.id !== action.ball.id);
        default:
            return state.map(b => ball(b, action));
    }
};

export default balls;
