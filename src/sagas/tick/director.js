import { put, select } from 'redux-saga/effects';
import Pizzicato from 'pizzicato';
import { updateDate } from '../../actions/game';
import { queueQuestion, popQuestion } from '../../actions/queue';
import { askQuestion } from '../../actions/asking';
import { questions, extraResponses } from '../../../questions';

const asound = new Pizzicato.Sound(require('../../../assets/out.wav'), () => { asound.play() });
//const amusic = new Pizzicato.Sound(require('../../../assets/soundcloud.mp3'), () => { amusic.play() });

//add ids to questions.
let id = 0;
questions.forEach(q => q.id = id++);

const randomQuestion = () => questions[Math.floor(Math.random() * questions.length)];

const tickDirectorSaga = function* ({ dt }) {

    //update the date
    yield put(incDate(dt));

    //Add events every 5 days, regardless of answers
    //TODO: add another variable in game for forced questions, or scripted questions. Like first
    //put(queueQuestion(randomQuestion()));

    //check to ask questions
    const { queue, game: { date } } = yield select();
    yield queue
        .filter(e => e.date >= date)
        .map(function*(e) => {
            yield put(askQuestion(e.question));
            //queue a random new question in a random number of days
            const newDate = new Date(e.date);
            newDate.setDate(newDate.getDate() + Math.floor(1 + Math.random() * 3));
            yield put(queueQuestion(randomQuestion(), newDate));
        });
};

export default tickDirectorSaga;
