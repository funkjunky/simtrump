import { intervalToggle } from './middlewares/reduxinterval';
import { updateButtons } from './actions/buttons';
import { buttonUp } from './actions/buttonUp';

const initKeyEvents = store => {
    window.addEventListener('keydown', ({ keyCode }) => {
        switch(keyCode) {
            //left, clockwise
            case 37:
                return store.dispatch(updateButtons({ left: true }));
            case 38:
                return store.dispatch(updateButtons({ up: true }));
            case 39:
                return store.dispatch(updateButtons({ right: true }));
            case 40:
                return store.dispatch(updateButtons({ down: true }));
        }
    });

    window.addEventListener('keyup', ({ keyCode }) => {
        switch(keyCode) {
            case 32:    //play or pause.
                console.log('playpause');
                return store.dispatch(intervalToggle());
            //left, clockwise
            case 37:
                return store.dispatch(updateButtons({ left: false }));
            case 38:
                return store.dispatch(updateButtons({ up: false }));
            case 39:
                return store.dispatch(updateButtons({ right: false }));
            case 40:
                return store.dispatch(updateButtons({ down: false }));
            case 65:
                return store.dispatch(buttonUp('a'));
            case 66:
                return store.dispatch(buttonUp('b'));
            case 88:
                return store.dispatch(buttonUp('x'));
            case 89:
                return store.dispatch(buttonUp('y'));
        }
    });
}

export default initKeyEvents;
