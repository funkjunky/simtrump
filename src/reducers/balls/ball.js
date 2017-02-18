let autoInc = 1;
const initialState = () => ({
    id: autoInc++,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    r: 0
});

const ball = (state = initialState(), { type, ball, dt }) => {
    switch(type) {
        case 'ADD_BALL':
            return { ...state, ...ball };
        case 'TICK_APPLY_VELOCITY_TO_BALL':
            return {
                ...state,
                x: state.x + dt * state.vx,
                y: state.y + dt * state.vy
            };
        case 'REVERSE_HORIZONTAL_VELOCITY_OF_BALL':
            if(state.id === ball.id)
                return {
                    ...state,
                    vx: -state.vx,
                    x: state.x - (state.vx / 10) //help the ball not get stuck. Jump it out.
                };
            else
                return state;

        case 'REVERSE_VERTICAL_VELOCITY_OF_BALL':
            if(state.id === ball.id)
                return {
                    ...state,
                    vy: -state.vy,
                    y: state.y - (state.vy / 10)
                };
            else
                return state;

        default:
            return state;
    }
};

export default ball;
