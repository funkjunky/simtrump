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

window.addEventListener("gamepadconnected", function( event ) {
    console.log('connects: ', event.gamepad);
});

let sagaMiddleware = createSagaMiddleware();
let store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, intervalMiddleware(10))
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
