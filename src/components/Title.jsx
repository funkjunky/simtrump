import React from 'react';
import { connect } from 'react-redux';
import pixi from 'pixi.js';
import { DisplayObjectContainer as Container } from 'react-pixi';

import PixelText from './PixelText.jsx';
import PulseText from './PulseDate.jsx';

const dayMapping = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const monthMapping = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'December',
];
const suffixDate = day => {
    if(day % 10 === 1 && day !== 11)
        return day + 'st';
    else if(day % 10 === 2 && day !== 12)
        return day + 'nd';
    else if(day % 10 === 3 && day !== 13)
        return day + 'rd';
    else
        return day + 'th';
};
const Title = ({ date }) => {
    return (
        <Container x={ 0 } y={ 0 }>
            <PixelText
                x={ 10 }
                text="SimTrump"
                style={{
                    fontSize: 14,
                    dropShadow: true,
                    dropShadowColor: '#AAAAAA',
                    dropShadowDistance: 3
                }}
                extra />
            <PulseText text={ dayMapping[date.getDay()] } x={ 420 } />
            <PulseText text={ monthMapping[date.getMonth()] } x={ 560 } />
            <PulseText text={ suffixDate(date.getDate()) } x={ 675 } />
            <PulseText text={ date.getFullYear() } x={ 740 } />
        </Container>
    );
}

export default connect(
    ({ game: { date } }) => ({ date })
)(Title);
