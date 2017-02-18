import React from 'react';
import { connect } from 'react-redux';
import { DisplayObjectContainer as Container } from 'react-pixi';

import Rect from './Rect.jsx';

const Walls = ({ walls }) => (
    <Container>
        <Rect x={0} y={0} width={640} height={20} fill={{ color: 'green', alpha: (walls.top) ? 1 : 0 }} />
        <Rect x={0} y={0} width={20} height={480} fill={{ color: 'red', alpha: (walls.left) ? 1 : 0 }} />
        <Rect x={620} y={0} width={20} height={480} fill={{ color: 'orange', alpha: (walls.right) ? 1 : 0 }} />
        <Rect x={0} y={460} width={640} height={20} fill={{ color: 'blue', alpha: (walls.bottom) ? 1 : 0 }} />
    </Container>
);

export default connect(({ walls }) => ({ walls }))(Walls);
