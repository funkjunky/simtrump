//Example use:
//let reduxInterval = ReduxInterval(10);
//createStore( ... , combineReducers(reduxInterval), ... );
//reduxInterval.play();
//reduxInterval.pause(); //to pause.
//
//reducer.js:
//const reducers = (state = 0, { type, dt }) => {
// switch(type) {
//      case 'tick':
//          console.log('time between frames: ', dt);
//          return state;
// }
//}
//TODO: interval should be an object, with different types and intervals...
//      ie. { 'tick': 10, 'collision-tick': 100, 'ai-tick': 1000 }
export const intervalMiddleware = (interval) => (store) => {
    let lastNow;
    let timeoutHandler;
    return next => action => {
        const { type } = action;
        if(type === INTERVAL_TOGGLE) {
            if(!timeoutHandler) {
                lastNow = Date.now();
                timeoutHandler = setInterval(() => {
                    store.dispatch({type: INTERVAL_TICK, dt: Date.now() - lastNow });
                    lastNow = Date.now();
                }, interval);
            } else {
                clearInterval(timeoutHandler);
                timeoutHandler = null;
            }
        }
        return next(action);
    };
};

export const INTERVAL_TICK = 'REDUX_INTERVAL_TICK';
export const INTERVAL_TOGGLE = 'REDUX_INTERVAL_TOGGLE';
export const intervalToggle = () => ({
    type: INTERVAL_TOGGLE
});
