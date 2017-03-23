import { put, select } from 'redux-saga/effects';
import Pizzicato from 'pizzicato';
import { incDate } from '../../actions/game';
import { queueQuestion } from '../../actions/queue';
import { askQuestion } from '../../actions/asking';
import { questions, extraResponses } from '../../questions';

//const asound = new Pizzicato.Sound(require('../../../assets/out.wav'), () => { asound.play() });
//const amusic = new Pizzicato.Sound(require('../../../assets/soundcloud.mp3'), () => { amusic.play() });

//random question not already in the queue
const questionsAvailable = (qs, queue, asking) => qs.filter(q => !queue.some(qq => qq.question.id === q.id) && !asking.some(qq => qq.question.id === q.id));
//This shows up on load and should load up after answering a question after a time.
const randomQuestion = qs => qs[Math.floor(Math.random() * qs.length)];

const tickDirectorSaga = function* ({ dt }) {
    const { queue, asking, buttons, game: { date } } = yield select();

    //update the date
    yield put(incDate(dt));

    //Add events every 5 days, regardless of answers
    //TODO: add another variable in game for forced questions, or scripted questions. Like first
    //put(queueQuestion(randomQuestion()));

    //check to ask questions
    yield queue
        .map(function*(e) {
            if(e.date > date)
                return;

            yield put(askQuestion(e));
            //queue a random new question in a random number of days
            const qsAvailable = questionsAvailable(questions, queue, asking);
            if(qsAvailable.length > 0) {
                const newDate = new Date(e.date);
                newDate.setDate(newDate.getDate() + Math.floor(1 + Math.random() * 3));
                const question = randomQuestion(qsAvailable);
                yield put(queueQuestion(question, newDate));
            }
        });
};

export default tickDirectorSaga;
