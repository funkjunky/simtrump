import React from 'react';
import pixi from 'pixi.js';
import { Graphics } from 'react-pixi';

class Circle extends React.Component {
    drawCircle = ({ radius }) => {
        this.refs.graphics.clear();
        this.refs.graphics.lineStyle(2, 0xFF00FF, 1);
        this.refs.graphics.beginFill(0x0000FF, 1);
        this.refs.graphics.drawCircle(0, 0, radius);
        this.refs.graphics.endFill();
    }

    componentDidMount() {
        this.drawCircle(this.props);
    }

    componentWillReceiveProps(props) {
        this.drawCircle(props);
    }

    render() {
        return <Graphics ref='graphics' x={this.props.x} y={this.props.y} />;
    }
}

export default Circle;
