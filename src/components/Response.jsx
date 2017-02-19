import React from 'react';
import { connect } from 'react-redux';
import { Sprite, DisplayObjectContainer as Container } from 'react-pixi';

import PixelText from './PixelText.jsx';

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

const Response = ({ x, y, button, label, pressed }) => {
    return (
        <Container x={ 0 } y={ y }>
            <Sprite x={ x } y={ -20 } scale={ 2 } image={ buttonImg[button] } alpha={ pressed ? 1 : 0.7 } />
            <PixelText x={ x + 64 } y={ 0 } text={ label } style={{ fill: buttonTextColor[button], fontSize: 14 }} />
        </Container>
    );
}

export default Response;
