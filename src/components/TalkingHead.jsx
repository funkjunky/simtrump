import React from 'react';
import { connect } from 'react-redux';
import { Sprite, Text, DisplayObjectContainer as Container } from 'react-pixi';

import PixelText from './PixelText.jsx';
import Rect from './Rect.jsx';

const trumptalk = [
    require('../../assets/trumptalk1.png'),
    require('../../assets/trumptalk2.png'),
    require('../../assets/trumptalk3.png'),
    require('../../assets/trumptalk2.png'),
    require('../../assets/trumptalk1.png')
];

const getRandomTalk = () => [
    {
        type: 'trump-tweet',
        message: 'random a'
    },
    {
        type: 'trump-tweet',
        message: 'random b'
    },
    {
        type: 'trump-tweet',
        message: 'random c'
    }
][Math.floor(Math.random() * 3)];

const speed = 100; //ms between chars
class TalkingHead extends React.Component {
    constructor(props) {
        super();
        const response = getRandomTalk();
        this.state = {
            length: 0,
            message: response.message,
            type: response.type,
            frame: 1
        };
        setInterval(() => {
            if(this.state.length < this.state.message.length) {
                this.setState({ length: this.state.length + 1 });

                if(this.state.frame < 4)
                    this.setState({ frame: this.state.frame + 1 });
                else if(Math.random() < 0.5)
                    this.setState({ frame: 0 });
            } else
                this.setState({ frame: 0 });
        }, speed);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.lastAnswer && nextProps.lastAnswer.message !== this.state.message)
            this.setState({
                length: 0,
                message: nextProps.lastAnswer.message,
                type: nextProps.lastAnswer.type
            });
    }

    render() {
        return (
            <Container x={ 0 } y={ 100 }>
                <Rect x={ 170 } y={ 10 } width={ 630 } height={ 200 } fill={{ color: '0xDDDDDD', alpha: 1 }} />
                <Sprite x={ -40 } image={ trumptalk[this.state.frame] } scale={ 3 } />
                <PixelText x={ 170 } y={ 10 } text={ this.state.message.substr(0, this.state.length) } style={{ wordWrap: true, wordWrapWidth: 430 }} />
            </Container>
        );
    }
};

export default connect(
    ({ answered }) => ({ lastAnswer: answered[answered.length - 1] })
)(TalkingHead);
