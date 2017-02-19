import React from 'react';
import { connect } from 'react-redux';
import pixi from 'pixi.js';
import { Text, DisplayObjectContainer as Container } from 'react-pixi';

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
            <Text text="SimTrump" />
            <Text text={ dayMapping[date.getDay()] + ', ' + monthMapping[date.getMonth()] + ' ' + suffixDate(date.getDate()) + ', ' + date.getFullYear() } x={ 200 } />
        </Container>
    );
}

export default connect(
    ({ game: { date } }) => ({ date })
)(Title);
