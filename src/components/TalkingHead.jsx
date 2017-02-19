import React from 'react';
import { connect } from 'react-redux';
import { Sprite, Text, DisplayObjectContainer as Container } from 'react-pixi';

import Rect from './Rect.jsx';

const trumpImage = require('../../assets/trumphead.png');

const getRandomTalk = () => [
    {
        type: 'trump-tweet',
        message: 'random a'
    },
    {
        type: 'trump-tweet',
        message: 'random b'
    },
    {
        type: 'trump-tweet',
        message: 'random c'
    }
][Math.floor(Math.random() * 3)];

const TalkingHead = ({ lastAnswer, answered }) => {
    const response = lastAnswer ? lastAnswer : getRandomTalk();
    return (
        <Container x={ 0 } y={ 100 }>
            <Rect x={ 170 } y={ 10 } width={ 630 } height={ 200 } fill={{ color: '0xDDDDDD', alpha: 1 }} />
            <Sprite x={ -40 } image={ trumpImage } scale={ 4 } />
            <Text x={ 170 } y={ 10 } text={ response.message } style={{ wordWrap: true, wordWrapWidth: 630 }} />
        </Container>
    );
};

export default connect(
    ({ answered }) => ({ lastAnswer: answered[answered.length - 1], answered })
)(TalkingHead);
