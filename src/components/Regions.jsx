import React from 'react';
import { connect } from 'react-redux';
import { Sprite, DisplayObjectContainer as Container } from 'react-pixi';

import PixelText from './PixelText.jsx';
import Rect from './Rect.jsx';

const arrows = {
    up: require('../../assets/up.png'),
    down: require('../../assets/down.png'),
    right: require('../../assets/right.png'),
    left: require('../../assets/left.png')
};

class Regions extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
        setInterval(() => {
            if(this.state.value < 5)
                this.setState({ value: this.state.value + 1 });
            else
                this.setState({ value: 0 });
        }, 100);
    }

    getBorder = (bool) => {
        if(bool) {
            return {
                width: this.state.value + 1,
                color: '0xFFFFFF',
                alpha: (7 - this.state.value) / 7
            };
        }
        else
            return;
    }

    render() {
        const { buttons: { up, down, left, right }, askingCounts } = this.props;
        const none = !(up || down || left || right);
        return (
            <Container x={ 0 } y={ 310 }>
                <Rect x={ 85 } y={ 85 } width={ 75 } height={ 75 } fill={{ color: (none) ? '0xAAAAAA' : '0xDDDDDD' }} />

                <Container x={ 10 } y={ 85 }>
                    <Rect width={ 75 } height={ 75 } fill={{ color: (left) ? '0x4444FF' : '0x0000FF' }} border={ this.getBorder(left) } />
                    <Sprite scale={ 1.2 } alpha={ (left) ? 0.8 : 0.5 } image={ arrows.left } />
                    <PixelText x={ 28 - this.state.value } y={ 25 - this.state.value } style={{ fontSize: 17 + this.state.value }} text={ askingCounts.left || '' } />
                </Container>

                <Container x={ 160 } y={ 85 }>
                    <Rect width={ 75 } height={ 75 } fill={{ color: (right) ? '0xFF4444' : '0xFF0000' }} border={ this.getBorder(right) } />
                    <Sprite scale={ 1.2 } alpha={ (right) ? 0.8 : 0.5 } image={ arrows.right } />
                    <PixelText x={ 28 - this.state.value } y={ 25 - this.state.value } style={{ fontSize: 17 + this.state.value }} text={ askingCounts.right || '' } />
                </Container>

                <Container x={ 85 } y={ 10 }>
                    <Rect width={ 75 } height={ 75 } fill={{ color: (up) ? '0x444444' : '0x888888' }} border={ this.getBorder(up) } />
                    <Sprite scale={ 1.2 } alpha={ (up) ? 0.8 : 0.5 } image={ arrows.up } />
                    <PixelText x={ 28 - this.state.value } y={ 25 - this.state.value } style={{ fontSize: 17 + this.state.value }} text={ askingCounts.up || '' } />
                </Container>

                <Container x={ 85 } y={ 160 }>
                    <Rect width={ 75 } height={ 75 } fill={{ color: (down) ? '0x444444' : '0x888888' }} border={ this.getBorder(down) } />
                    <Sprite scale={ 1.2 } alpha={ (down) ? 0.8 : 0.5 } image={ arrows.down } />
                    <PixelText x={ 28 - this.state.value } y={ 25 - this.state.value } style={{ fontSize: 17 + this.state.value }} text={ askingCounts.down || '' } />
                </Container>
            </Container>
        );
    }
};

export default connect(
    ({ buttons, asking }) => ({ buttons, askingCounts: {
        left: asking.filter(q => q.region === 'left').length,
        right: asking.filter(q => q.region === 'right').length,
        up: asking.filter(q => q.region === 'up').length,
        down: asking.filter(q => q.region === 'down').length
    } })
)(Regions);
