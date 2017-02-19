import React from 'react';
import { connect } from 'react-redux';
import { Sprite, DisplayObjectContainer as Container } from 'react-pixi';

import PixelText from './PixelText.jsx';
import Rect from './Rect.jsx';

const russia = require('../../assets/russia.png');
const protest = require('../../assets/protest.png');
const reddit = require('../../assets/reddit.png');
const dollar = require('../../assets/dollar.png');

const getWinningScore = scores => {
    if(scores.russia > 99)
        return {
            msg: 'Winner! Ты победил! Боже, благослови Соединенные Штаты русский.',
            img: russia
        };
    else if(scores.protest > 80)
        return {
            msg: 'The entire female population is protesting, meaning more men can get jobs. You Win!',
            img: protest
        };
    else if(scores.reddit > 1000)
        return {
            msg: 'With /r/the_donald reaching 1 million subscribers. Be the rule of Reddit, you are now the supreme world leader! WINNER!',
            img: reddit
        };
    else if(scores.dollars > 150)
        return {
            msg: 'You\'ve made your first successful business and made billions off of Americans. WINNER!',
            img: dollar
        };
    else
        return null;
};

const GameOver = ({ scores }) => (getWinningScore(scores))
    ? (
        <Container x={ 0 } y={ 0 }>
            <Rect width={ 1366 } height={ 768 } x={ 0 } y={ 0 } fill={{ color: '0xFFFFFF' }} />
            <Sprite x={ 200 } y={ 100 } image={ getWinningScore(scores).img } scale={ 8 } />
            <PixelText x={ 50 } y={ 200 } style={{ fontSize: 20 }} text={ getWinningScore(scores).msg } />

            <Container x={ 200 } y={ 400 }>
                <Sprite x={ 0 } y={ 0 } image={ reddit } scale={ 2 } />
                <PixelText x={ 30 } y={ 5 } style={{ fontSize: 10 }} text={ scores.reddit + 'k subs' } />
                <Sprite x={ 0 } y={ 25 } image={ dollar } scale={ 2 } />
                <PixelText x={ 30 } y={ 30 } style={{ fontSize: 10 }} text={ '$' + scores.dollars + 'b' } />
                <Sprite x={ 0 } y={ 50 } image={ russia } scale={ 2 } />
                <PixelText x={ 30 } y={ 55 } style={{ fontSize: 10 }} text={ scores.russia + '%' } />
                <Sprite x={ 0 } y={ 75 } image={ protest } scale={ 2 } />
                <PixelText x={ 30 } y={ 80 } style={{ fontSize: 10 }} text={ scores.protest + ' mil' } />
            </Container>
        </Container>
    ) : <Container></Container>;

export default connect(
    ({ game: { scores } }) => ({ scores })
)(GameOver);
