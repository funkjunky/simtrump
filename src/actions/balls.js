export const addBall = ball => ({
    type: 'ADD_BALL',
    ball
});

export const removeBall = ball => ({
    type: 'REMOVE_BALL',
    ball
});

export const applyVelocityToBalls = (dt) => ({
    type: 'TICK_APPLY_VELOCITY_TO_BALL',
    dt
});

export const reverseHorizontalVelocityOfBall = ball => ({
    type: 'REVERSE_HORIZONTAL_VELOCITY_OF_BALL',
    ball
});

export const reverseVerticalVelocityOfBall = ball => ({
    type: 'REVERSE_VERTICAL_VELOCITY_OF_BALL',
    ball
});
