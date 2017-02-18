import React, { Component } from 'react';
import pixi from 'pixi.js';
import { Text, DisplayObjectContainer as Container } from 'react-pixi';

const Title = () => {
    return (
        <Container x={ 0 } y={ 0 }>
            <Text text="SimTrump" />
        </Container>
    );
}

export default Title;
