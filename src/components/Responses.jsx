import React from 'react';
import { connect } from 'react-redux';
import { DisplayObjectContainer as Container } from 'react-pixi';

import Response from './response.jsx';
import { defaultResponses, extraResponse } from '../questions';

const Responses = ({ responses }) => {
    return (
        <Container x={ 250 } y={ 300 }>
            <Response x={ 20 } y={ 10 } button={ 'y' } { ...responses.y } />
            <Response x={ 0 } y={ 80 } button={ 'x' } { ...responses.x } />
            <Response x={ 30 } y={ 150 } button={ 'b' } { ...responses.b } />
            <Response x={ 10 } y={ 220 } button={ 'a' } { ...(responses.a || extraResponse) } />
        </Container>
    );
};

export default connect(
    ({ buttons, asking }) => {
        //TODO: this is shitty, instead, alternate between the directions, and only allow one to be on at a time.
        //      ie. direction = 'up', alongside x: true
        if(buttons.up && asking.find(a => a.region === 'up'))
            return { responses: asking.find(a => a.region === 'up').responses };
        else if(buttons.down && asking.find(a => a.region === 'down'))
            return { responses: asking.find(a => a.region === 'down').responses };
        else if(buttons.left && asking.find(a => a.region === 'left'))
            return { responses: asking.find(a => a.region === 'left').responses };
        else if(buttons.right && asking.find(a => a.region === 'right'))
            return { responses: asking.find(a => a.region === 'right').responses };
        else
            return { responses: defaultResponses };
    }
)(Responses);
