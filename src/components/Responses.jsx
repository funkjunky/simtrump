import React from 'react';
import { connect } from 'react-redux';
import { DisplayObjectContainer as Container } from 'react-pixi';

import Response from './response.jsx';
import { defaultResponses, extraResponse } from '../questions';

import Rect from './Rect.jsx';

const getBGColor = (buttons, def) => {
    if(def)
        return '0x555555';

    if(buttons.up)
        return '0x222222';
    else if(buttons.down)
        return '0x999999';
    else if(buttons.left)
        return '0x0000ff';
    else if(buttons.right)
        return '0xff0000';
    else
        return '0x555555';
};

const Responses = ({ responses, buttons, def }) => {
    return (
        <Container x={ 250 } y={ 305 }>
            <Rect width={ 545 } height={ 240 } fill={{ color: '0x555555' }} border={{ width: 2, color: getBGColor(buttons, def) }} />
            <Response x={ 20 } y={ 15 } button={ 'y' } { ...responses.y } pressed={ buttons.y } />
            <Response x={ 0 } y={ 80 } button={ 'x' } { ...responses.x } pressed={ buttons.x } />
            <Response x={ 30 } y={ 145 } button={ 'b' } { ...responses.b } pressed={ buttons.b } />
            <Response x={ 10 } y={ 210 } button={ 'a' } { ...(responses.a || extraResponse) } pressed={ buttons.a } />
        </Container>
    );
};

export default connect(
    ({ buttons, asking }) => {
        //TODO: this is shitty, instead, alternate between the directions, and only allow one to be on at a time.
        //      ie. direction = 'up', alongside x: true
        if(buttons.up && asking.find(a => a.region === 'up'))
            return { buttons, responses: asking.find(a => a.region === 'up').question.responses };
        else if(buttons.down && asking.find(a => a.region === 'down'))
            return { buttons, responses: asking.find(a => a.region === 'down').question.responses };
        else if(buttons.left && asking.find(a => a.region === 'left'))
            return { buttons, responses: asking.find(a => a.region === 'left').question.responses };
        else if(buttons.right && asking.find(a => a.region === 'right'))
            return { buttons, responses: asking.find(a => a.region === 'right').question.responses };
        else
            return { buttons, responses: defaultResponses, def: true };
    }
)(Responses);
