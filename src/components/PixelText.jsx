import React from 'react';

import { Text } from 'react-pixi';

const defaultStyle = {
    fontSize: 19,
    wordWrap: true,
    wordWrapWidth: 400
};

const PixelText = ({ extra, style: givenStyle, ...props }) => {
    const scale = (extra ? 2.5 : 1.5);
    const style = { ...defaultStyle, ...givenStyle };
    return <Text {...{...props, scale, style }} />
};

export default PixelText;
