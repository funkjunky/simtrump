import { intervalToggle } from './middlewares/reduxinterval';

const initKeyEvents = store => {
    window.addEventListener('keydown', ({ keyCode }) => {
        switch(keyCode) {
            //left, clockwise
            case 37:
                return store.dispatch({
                    type: 'WALL_ON',
                    wall: 'left'
                });
            case 38:
                return store.dispatch({
                    type: 'WALL_ON',
                    wall: 'top'
                });
            case 39:
                return store.dispatch({
                    type: 'WALL_ON',
                    wall: 'right'
                });
            case 40:
                return store.dispatch({
                    type: 'WALL_ON',
                    wall: 'bottom'
                });
        }
    });

    window.addEventListener('keyup', ({ keyCode }) => {
        switch(keyCode) {
            case 32:    //play or pause.
                console.log('playpause');
                return store.dispatch(intervalToggle());
            //left, clockwise
            case 37:
                return store.dispatch({
                    type: 'WALL_OFF',
                    wall: 'left'
                });
            case 38:
                return store.dispatch({
                    type: 'WALL_OFF',
                    wall: 'top'
                });
            case 39:
                return store.dispatch({
                    type: 'WALL_OFF',
                    wall: 'right'
                });
            case 40:
                return store.dispatch({
                    type: 'WALL_OFF',
                    wall: 'bottom'
                });
        }
    });
}

export default initKeyEvents;
