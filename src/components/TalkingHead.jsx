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

const trumpblink = [
    require('../../assets/trumpblink1.png'),
    require('../../assets/trumpblink2.png'),
    require('../../assets/trumpblink3.png'),
    require('../../assets/trumpblink2.png'),
    require('../../assets/trumpblink1.png')
];

const trumphair = [
    require('../../assets/trumphair1.png'),
    require('../../assets/trumphair2.png'),
    require('../../assets/trumphair3.png'),
    require('../../assets/trumphair4.png'),
    require('../../assets/trumphair3.png'),
    require('../../assets/trumphair2.png'),
    require('../../assets/trumphair3.png'),
    require('../../assets/trumphair4.png'),
    require('../../assets/trumphair3.png'),
    require('../../assets/trumphair2.png'),
    require('../../assets/trumphair1.png'),
];

const getRandomTalk = () => [
    {
        type: 'trump-tweet',
        message: '"Know when to walk away from the table." The Art of the Deal'
    },
    {
        type: 'trump-tweet',
        message: 'People are really liking the new ties and shirts @Macy\'s-they are amazing and selling great!'
    },
    {
        type: 'trump-tweet',
        message: 'Finally had a Burger King installed on Air Force One #protein #makeamericahealthyagain'
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
            frame: 1,
            idle: null,
            idleFrame: 1
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

        setInterval(() => {
            if(!this.state.idle)
                return;

            if(this.state.idleFrame < this.state.idle.length)
                this.setState({ idleFrame: this.state.idleFrame + 1 });
        }, speed);

        setInterval(() => {
            if(this.state.length === this.state.message.length && (!this.state.idle || this.state.idleFrame === this.state.idle.length)) //not talking
            {
                if(Math.random() > 0.6)
                    this.setState({
                        idle: trumphair,
                        idleFrame: 0,
                    });
                else if(Math.random() > 0.6)
                    this.setState({
                        idle: trumpblink,
                        idleFrame: 0,
                    });
            }
        }, 1000);
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
        let image = trumptalk[this.state.frame];;
        if(this.state.idle && this.state.message.length === this.state.length)
            image = this.state.idle[this.state.idleFrame];

        return (
            <Container x={ 0 } y={ 130 }>
                <Rect x={ 170 } y={ 10 } width={ 625 } height={ 150 } fill={{ color: '0xDDDDDD', alpha: 1 }} />
                <Sprite x={ -30 } image={ image } scale={ 3 } />
                <PixelText x={ 170 } y={ 10 } text={ this.state.message.substr(0, this.state.length) } style={{ wordWrap: true, wordWrapWidth: 400 }} />
            </Container>
        );
    }
};

export default connect(
    ({ answered }) => ({ lastAnswer: answered[answered.length - 1] })
)(TalkingHead);
