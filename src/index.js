import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AppContainer } from 'react-hot-loader';
import { intervalToggle } from './middlewares/reduxinterval';

import sagas from './sagas';
import reducers from './reducers';
import { intervalMiddleware } from './middlewares/reduxinterval';
import App from './components/App';
import initKeyEvents from './initKeyEvents';
import { updateButtons } from './actions/buttons';
import { queueQuestion } from './actions/queue';
import { buttonUp } from './actions/buttonUp';
import { questions, extraResponses } from './questions';

let sagaMiddleware = createSagaMiddleware();
let store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, intervalMiddleware(100))
);

sagaMiddleware.run(sagas);

initKeyEvents(store);

function renderWithHotReload(RootElement) {
	render((
		<AppContainer>
    		<Provider store={ store }>
        		<RootElement />
    		</Provider>
		</AppContainer>),
    	document.getElementById('pixi-root')
	);
}
renderWithHotReload(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
	renderWithHotReload(NextApp);
  });
}

const mapping = {
    3: 'y',
    2: 'x',
    1: 'b',
    0: 'a',
    12: 'up',
    13: 'down',
    14: 'left',
    15: 'right',
};
const getMyButtons = buttons => {
    const myButtons = {};
    buttons
        .forEach((b, i) => {
            if(mapping[i])
                myButtons[mapping[i]] = b.pressed
        });

    return myButtons;
};

let objEq = (a, b) => { //lazy implementation, assumes same length
    return Object.keys(a).every(k => a[k] === b[k]);
};

store.dispatch(queueQuestion(
    questions[0],
    new Date('January 21, 2017 9:00:00')
));

store.dispatch(intervalToggle());

let gamepadInterval = setInterval(() => {
    var gp = navigator.getGamepads()[0];
    const lastButtons = store.getState().buttons;
    const buttons = getMyButtons(gp.buttons);
    if(!objEq(lastButtons, buttons)) {
        //console.log('current button: ', buttons);
        store.dispatch(updateButtons(buttons));
        ['x', 'y', 'b', 'a'].forEach(key => {
            if(!buttons[key] && lastButtons[key])
                store.dispatch(buttonUp(key));
        });
    }
}, 1);
