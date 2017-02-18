const liberalNews = 'DMM';
const crazyNews = 'BartBart';
export const questions = [
    {
        event: `${ liberalsNews } Just reported that there were more pigeons than people at the inauguration.`,
        region: 'blue',
        responses: {
            y: {
                label: 'Portray concerns for the legitimacy of the media',
                type: 'trump-tweet'
                message: `Fake News at it again, there were over 2 gajillion people are the inauguration. ${ liberalsNews } SAD`
            },
            x: {
                label: 'Send spicer to inform media',
                type: 'spicer'
                message: `You dum dums. I have the REAL facts here. Confirmed by ${ crazyNews }, we had to turn away b-list singer Beyonce, because the crowd was too full.`
            },
            b: {
                label: 'Deal with the issue of voter fraud',
                type: 'trump-face',
                message: 'We can see the real problem. These same pigeons that took the spots of honest Americans, are the same ones voting for the democrats.'
            },
                message: `I just heard from ${ crazyNews } the illegals are now using trojan horses #romanfail #americatoosmart`
            }
        },
    },
    {
        event: 'The Secretary of education was caught on camera unable to read a book to second grades'
        region: 'blue',
        responses: {
            y: {
                label: 'Talk about the improvements we must make to education',
                type: 'trump-face',
                message: 'Books Lie. Less books!'
            },
            x: {
                label: 'Reinforce the importance of reading comprehension',
                type: 'trump-face'
                message: 'I love books, books are the best, and Betsy gets that.'
            },
            b: {
                label: 'Send Kellyanne'
                type: 'kellyanne',
                message: 'Betsy, like Trump, are great readers. I see them reading the greatest books and doing it in the most talented ways.'
            },
        },
    },
];

const extraResponses = [
    {
        label: 'Do Nothing'
        type: 'trump-tweet'
        message: `I just heard from ${ crazyNews } the illegals are now using trojan horses #romanfail #americatoosmart`
    }
];
