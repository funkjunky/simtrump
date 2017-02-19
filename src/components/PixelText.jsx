import React from 'react';

import { Text } from 'react-pixi';

const PixelText = ({ extra, ...props }) => (
    <Text { ...{ ...props, scale: (extra) ? 2.5 : 1.5, style: { fontSize: 19, wordWrap: true, wordWrapWidth: 400, ...props.style } } } />
);

export default PixelText;
