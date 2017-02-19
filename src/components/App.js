import React, { Component } from 'react';
import pixi from 'pixi.js';
import { Stage, Sprite } from 'react-pixi';

import Title from './Title.jsx';
import Event from './Event.jsx';
import TalkingHead from './TalkingHead.jsx';
import Regions from './Regions.jsx';
import Responses from './Responses.jsx';

//maintains pixelation
pixi.SCALE_MODES.DEFAULT = pixi.SCALE_MODES.NEAREST;

const App = () => {
    return (
        <Stage>
            <Title />
            <Event />
            <TalkingHead />
            <Regions />
            <Responses />
        </Stage>
    );
};

export default App;
