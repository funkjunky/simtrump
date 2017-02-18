import React from 'react';
import { connect } from 'react-redux';
import { Sprite, Text, DisplayObjectContainer as Container } from 'react-pixi';

import Rect from './Rect.jsx';

const trumpImage = require('../../assets/trumphead.png');

const TalkingHead = () => (
    <Container x={ 0 } y={ 200 }>
        <Sprite x={ 10 } y={ 10 } image={ trumpImage } />
        <Rect x={ 100 } y={ 10 } width={ 700 } height={ 200 } fill={{ color: 'gray', alpha: 1 }} />
        <Text x={ 100 } y={ 10 } text="WRONG!!!" />
    </Container>
);

export default TalkingHead;
