import React, { Component } from 'react';
import pixi from 'pixi.js';
import { Stage, Sprite } from 'react-pixi';
import Walls from './Walls.jsx';
import Balls from './Balls.jsx';

const App = () => {
    const image = require("../../assets/jane.png");

    return (
        <Stage>
            <Walls />
            <Balls />
            <Sprite x={ 351 } y={ 350 } image={ image } />
        </Stage>
    );
};

export default App;
