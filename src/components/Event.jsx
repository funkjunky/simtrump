import React from 'react';
import { connect } from 'react-redux';
import { Sprite, Text, DisplayObjectContainer as Container } from 'react-pixi';

import PixelText from './PixelText.jsx';
import Rect from './Rect.jsx';

const speed = 50; //ms between chars
class Event extends React.Component {
    constructor(props) {
        super();
        this.state = {
            length: 0,
            event: ''
        };
        setInterval(() => {
            if(this.state.length < this.state.event.length)
                this.setState({ length: this.state.length + 1 });
        }, speed);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.event && nextProps.event !== this.state.event)
            this.setState({
                length: 0,
                event: nextProps.event
            });
    }

    render() {
        return (
            <Container x={ 0 } y={ 40 }>
                <Rect x={ 10 } y={ 10 } width={ 700 } height={ 100 } fill={{ color: '0xDDDDDD', alpha: 1 }} />
                <PixelText x={ 10 } y={ 10 } text={ this.state.event.substr(0, this.state.length) } style={{ wordWrap: true, wordWrapWidth: 460, fontSize: 16 }} />
            </Container>
        );
    }
};

export default connect(
    ({ asking, buttons }) => {
        if(buttons.up && asking.find(a => a.region === 'up'))
            return { event: asking.find(a => a.region === 'up').question.event };
        else if(buttons.down && asking.find(a => a.region === 'down'))
            return { event: asking.find(a => a.region === 'down').question.event };
        else if(buttons.left && asking.find(a => a.region === 'left'))
            return { event: asking.find(a => a.region === 'left').question.event };
        else if(buttons.right && asking.find(a => a.region === 'right'))
            return { event: asking.find(a => a.region === 'right').question.event };
        else
            return { event: '' };

    }
)(Event);
