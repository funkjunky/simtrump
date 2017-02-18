import React from 'react';
import { connect } from 'react-redux';
import { Sprite, Text, DisplayObjectContainer as Container } from 'react-pixi';

const buttonImg = {
    y: require('../../assets/buttons/y.png'),
    x: require('../../assets/buttons/x.png'),
    a: require('../../assets/buttons/a.png'),
    b: require('../../assets/buttons/b.png')
};
const buttonTextColor = {
    y: 'yellow',
    x: 'blue',
    a: 'green',
    b: 'red'
};

const Response = ({ x, y, label, response }) => {
    return (
        <Container x={ 0 } y={ y }>
            <Sprite x={ x } y={ 0 } image={ buttonImgs[label] } />
            <Text x={ x + 64 } y={ 0 } text={ response } style={{ fill: buttonTextColor[label] }} />
        </Container>
    );
}

export default Response;
