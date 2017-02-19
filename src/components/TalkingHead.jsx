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

const TalkingHead = ({ lastAnswer }) => {
    const response = lastAnswer ? lastAnswer.messages[lastAnswer.messageIndex] : getRandomTalk();
    console.log('response type: ', response.type);
    return (
        <Container x={ 0 } y={ 100 }>
            <Rect x={ 100 } y={ 10 } width={ 700 } height={ 200 } fill={{ color: '0xDDDDDD', alpha: 1 }} />
            <Sprite x={ 10 } y={ 10 } image={ trumpImage } />
            <Text x={ 100 } y={ 10 } text={ response.message } />
        </Container>
    );
};

export default connect(
    ({ answered }) => ({ lastAnswer: answered[answered.length - 1] })
)(TalkingHead);
