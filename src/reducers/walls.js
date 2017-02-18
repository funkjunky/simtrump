const initialState = {
    up: false,
    right: false,
    down: false,
    left: false
};

const walls = (state = initialState, { type, wall }) => {
    switch(type) {
        case 'WALL_ON':
            return { ...state, [wall]: true };
        case 'WALL_OFF':
            return { ...state, [wall]: false };
        default:
            return state;
    }
}

export default walls;
