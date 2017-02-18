import React from 'react';
import pixi from 'pixi.js';
import { Graphics } from 'react-pixi';

const defaultBorder = {
    width: 1,
    color: 'black',
    alpha: 1
};

class Rect extends React.Component {
    drawRect = ({ x, y, width, height, border = defaultBorder, fill }) => {
        this.refs.graphics.clear();
        this.refs.graphics.lineStyle(
            border.width,
            border.color,
            border.alpha
        );

        if(fill)
            this.refs.graphics.beginFill(
                fill.color,
                fill.alpha
            );

        this.refs.graphics.drawRect(0, 0, width, height);
        this.refs.graphics.endFill();
    }

    componentDidMount() {
        this.drawRect(this.props);
    }

    componentWillReceiveProps(props) {
        this.drawRect(props);
    }

    render() {
        return <Graphics ref='graphics' x={this.props.x} y={this.props.y} alpha={ this.props.alpha } />;
    }
}

export default Rect;
