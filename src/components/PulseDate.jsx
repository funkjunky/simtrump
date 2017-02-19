import React from 'react';

import PixelText from './PixelText.jsx';

class PulseDate extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
        setInterval(() => {
            if(this.state.value < 100)
                this.setState({ value: this.state.value + 1 });
        }, 1);
    }

    componentWillReceiveProps(next) {
        if(next.text !== this.props.text)
            this.setState({ value: 0 });
    }

    render() {
        const { text, ...props } = this.props;
        return (
            <PixelText
                style={{ fontSize: 16 }}
                y={ -(100 - this.state.value) }
                alpha={ this.state.value / 100 }
                text={ text }
                { ...props }
            />
        );
    }
}

export default PulseDate;
