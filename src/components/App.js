import React, { Component } from 'react';
import pixi from 'pixi.js';
import { Stage, Sprite } from 'react-pixi';

import Title from './Title.jsx';
import Event from './Event.jsx';
import TalkingHead from './TalkingHead.jsx';
import Regions from './Regions.jsx';
import Responses from './Responses.jsx';
import Score from './Score.jsx';
import GameOver from './GameOver.jsx';

//maintains pixelation
pixi.SCALE_MODES.DEFAULT = pixi.SCALE_MODES.NEAREST;

const App = () => {
    return (
        <Stage>
            <Title />
            <Score x={ 710 } y={ 40 } />
            <Event />
            <TalkingHead />
            <Regions />
            <Responses />
            <GameOver />
        </Stage>
    );
};

export default App;
