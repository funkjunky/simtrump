import React from 'react';
import { connect } from 'react-redux';
import { DisplayObjectContainer as Container } from 'react-pixi';

import Rect from './Rect.jsx';

const Regions = () => {
    return (
        <Container x={ 0 } y={ 400 }>
            <Rect x={ 10 } y={ 85 } width={ 75 } height={ 75 } fill={{ color: 'red' }} />
            <Rect x={ 85 } y={ 85 } width={ 75 } height={ 75 } fill={{ color: '#EEE' }} />
            <Rect x={ 160 } y={ 85 } width={ 75 } height={ 75 } fill={{ color: 'blue' }} />
            <Rect x={ 85 } y={ 10 } width={ 75 } height={ 75 } fill={{ color: 'gray' }} />
            <Rect x={ 85 } y={ 160 } width={ 75 } height={ 75 } fill={{ color: 'gray' }} />
        </Container>
    );
};

export default Regions;
