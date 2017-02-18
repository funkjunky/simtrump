import { put, select } from 'redux-saga/effects';
import Pizzicato from 'pizzicato';

import { reverseHorizontalVelocityOfBall, reverseVerticalVelocityOfBall } from '../../actions/balls';
import { reduceBallCD, setBallCD } from '../../actions/game';
import { addBall, removeBall } from '../../actions/balls';

const BALL_CD = 1000;

const asound = new Pizzicato.Sound(require('../../../assets/out.wav'), () => { asound.play() });
//const amusic = new Pizzicato.Sound(require('../../../assets/soundcloud.mp3'), () => { amusic.play() });

const tickDirectorSaga = function* ({ dt }) {
    const { balls, walls, game: { ballCD } } = yield select();
    //console.log('director tick', dt, ballCD);
    //out of bounds
    yield balls.map(function*(ball) {
        if(ball.x > 640 || ball.x < 0 || ball.y > 480 || ball.y < 0) {
            yield put(removeBall(ball));
            asound.play();

            if(ball.x > 640)
                console.log('out of right');
            if(ball.x < 0)
                console.log('out of left');
            if(ball.y > 480)
                console.log('out of bottom');
            if(ball.y < 0)
                console.log('out of top');
        }
    });

    //bounce off walls
    yield balls.map(function*(ball) {
        if(ball.x > 620 && walls.right)
            yield put(reverseHorizontalVelocityOfBall(ball));
        if(ball.x < 20 && walls.left)
            yield put(reverseHorizontalVelocityOfBall(ball));
        if(ball.y > 460 && walls.bottom)
            yield put(reverseVerticalVelocityOfBall(ball));
        if(ball.y < 20 && walls.top)
            yield put(reverseVerticalVelocityOfBall(ball));
    });

    const randNeg = (base, diff) => (Math.random() > 0.5)
        ? base + Math.random() * 50
        : -base - Math.random() * 50;

    //check duration for adding a ball.
    if(ballCD < 0) {
        yield put(setBallCD(BALL_CD));
        yield put(addBall({
            x: 120 + Math.random() * 500,
            y: 120 + Math.random() * 340,
            vx: randNeg(100, 100),
            vy: randNeg(100, 100),
            r: 20
        }));
    } else
        yield put(reduceBallCD(dt));
};

export default tickDirectorSaga;
