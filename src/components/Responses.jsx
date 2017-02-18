import React from 'react';
import { connect } from 'react-redux';
import { DisplayObjectContainer as Container } from 'react-pixi';

import Response from './response.jsx';

//TODO: remove =[] once we have data.
const Responses = ({ answers = [] }) => {
    return (
        <Container x={ 800 } y={ 400 }>
            { answers.map( answer => (
                <Response { ...answer } />
            ))}
        </Container>
    );
};

const getRegion = (buttons) => {
    if(buttons.up)
        return 'undecidedTop';
    if(buttons.down)
        return 'undecidedBottom';
    if(buttons.left)
        return 'red';
    if(buttons.right)
        return 'blue';
};
export default connect(
    //({ buttons, questionsQueue }) => ({
    //    answers: questionsQueue[getRegion(buttons)].answers
    //})
)(Responses);
