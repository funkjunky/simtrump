import React from 'react';
import { connect } from 'react-redux';
import { Sprite, DisplayObjectContainer as Container } from 'react-pixi';

import PixelText from './PixelText.jsx';
import Rect from './Rect.jsx';

const russia = require('../../assets/russia.png');
const protest = require('../../assets/protest.png');
const reddit = require('../../assets/reddit.png');
const dollar = require('../../assets/dollar.png');

const textProps = { x: 30, style: { fontSize: 10 } };

const Score = ({ x, y, scores }) => (
    <Container {...{ x, y }}>
        <Sprite y={ 0 } image={ reddit } scale={ 2 } />
        <PixelText { ...textProps } y={ 5 } text={ scores.reddit + 'k subs' } />
        <Sprite y={ 25 } image={ dollar } scale={ 2 } />
        <PixelText { ...textProps } y={ 30 } text={ '$' + scores.dollars + 'b' } />
        <Sprite y={ 50 } image={ russia } scale={ 2 } />
        <PixelText { ...textProps } y={ 55 } text={ scores.russia + '%' } />
        <Sprite y={ 75 } image={ protest } scale={ 2 } />
        <PixelText { ...textProps } y={ 80 } text={ scores.protest + ' mil' } />
    </Container>
);

export default connect(
    ({ game: { scores } }) => ({ scores })
)(Score);
