import React from 'react';
import { connect } from 'react-redux';
import { DisplayObjectContainer as Container } from 'react-pixi';

import Circle from './Circle.jsx';

const Balls = ({ balls }) => (
    <Container>
        {balls.map(({ x, y, r, id }) => (
            <Circle x={x} y={y} radius={r} key={ id } />
        ))}
    </Container>
);

export default connect(({ balls }) => ({ balls }))(Balls);
