const initialState = { y: false, x: false, b: false, a: false, up: false, left: false, down: false, right: false };

const buttons = (state = initialState, { type, buttons }) => {
    switch(type) {
        case 'UPDATE_BUTTONS':
            return buttons;
        default:
            return state;
    }
};

export default buttons;
