import React from 'react';
import { connect } from 'react-redux';
import { DisplayObjectContainer as Container } from 'react-pixi';

import PixelText from './PixelText.jsx';
import Rect from './Rect.jsx';

const Regions = ({ buttons: { up, down, left, right }, askingCounts }) => {
    const none = !(up || down || left || right);
    return (
        <Container x={ 0 } y={ 310 }>
            <Rect x={ 85 } y={ 85 } width={ 75 } height={ 75 } fill={{ color: (none) ? '0xAAAAAA' : '0xDDDDDD' }} />

            <Container x={ 10 } y={ 85 }>
                <Rect width={ 75 } height={ 75 } fill={{ color: (left) ? '0x4444FF' : '0x0000FF' }} />
                <PixelText x={ 25 } y={ 25 } text={ askingCounts.left || '' } />
            </Container>

            <Container x={ 160 } y={ 85 }>
                <Rect width={ 75 } height={ 75 } fill={{ color: (right) ? '0xFF4444' : '0xFF0000' }} />
                <PixelText x={ 25 } y={ 25 } text={ askingCounts.right || '' } />
            </Container>

            <Container x={ 85 } y={ 10 }>
                <Rect width={ 75 } height={ 75 } fill={{ color: (up) ? '0x444444' : '0x888888' }} />
                <PixelText x={ 25 } y={ 25 } text={ askingCounts.up || '' } />
            </Container>

            <Container x={ 85 } y={ 160 }>
                <Rect width={ 75 } height={ 75 } fill={{ color: (down) ? '0x444444' : '0x888888' }} />
                <PixelText x={ 25 } y={ 25 } text={ askingCounts.down || '' } />
            </Container>
        </Container>
    );
};

export default connect(
    ({ buttons, asking }) => ({ buttons, askingCounts: {
        left: asking.filter(q => q.region === 'left').length,
        right: asking.filter(q => q.region === 'right').length,
        up: asking.filter(q => q.region === 'up').length,
        down: asking.filter(q => q.region === 'down').length
    } })
)(Regions);
