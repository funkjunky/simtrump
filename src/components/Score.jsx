import React from 'react';
import { connect } from 'react-redux';
import { Sprite, DisplayObjectContainer as Container } from 'react-pixi';

import PixelText from './PixelText.jsx';
import Rect from './Rect.jsx';

const russia = require('../../assets/russia.png');
const protest = require('../../assets/protest.png');
const reddit = require('../../assets/reddit.png');
const dollar = require('../../assets/dollar.png');

const Score = ({ scores }) => (
    <Container x={ 710 } y={ 40 }>
        <Sprite x={ 0 } y={ 0 } image={ reddit } scale={ 2 } />
        <PixelText x={ 30 } y={ 5 } style={{ fontSize: 10 }} text={ scores.reddit + 'k subs' } />
        <Sprite x={ 0 } y={ 25 } image={ dollar } scale={ 2 } />
        <PixelText x={ 30 } y={ 30 } style={{ fontSize: 10 }} text={ '$' + scores.dollars + 'b' } />
        <Sprite x={ 0 } y={ 50 } image={ russia } scale={ 2 } />
        <PixelText x={ 30 } y={ 55 } style={{ fontSize: 10 }} text={ scores.russia + '%' } />
        <Sprite x={ 0 } y={ 75 } image={ protest } scale={ 2 } />
        <PixelText x={ 30 } y={ 80 } style={{ fontSize: 10 }} text={ scores.protest + ' mil' } />
    </Container>
);

export default connect(
    ({ game: { scores } }) => ({ scores })
)(Score);
