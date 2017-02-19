const liberalNews = 'NNC';
const crazyNews = 'Brightbort';

export const defaultResponses = {
    y: {
        label: 'Engage with the public through social media',
        messages: [{
            type: 'trump-tweet',
            message: 'engage with, A'
        }]
    },
    x: {
        label: 'Send the national gaurd',
        messages: [{
            type: 'trump-tweet',
            message: 'send national, A'
        }]
    },
    b: {
        label: 'Consult experts in their respective fields',
        messages: [{
            type: 'trump-tweet',
            message: 'consult experts, A'
        }]
    },
    a: {
        label: 'Golf',
        messages: [{
            type: 'trump-tweet',
            message: 'golf, A'
        }]
    }
}

let id = 0;
export const questions = [
    {
        event: `${ liberalNews } Just reported that there were more pigeons than people at the inauguration.`,
        region: 'left',
        responses: {
            y: {
                label: 'Portray concerns for the legitimacy of the media',
                messages: [{
                    type: 'trump-tweet',
                    message: `#Fakenews at it again, there were over 2 gajillion people at the inauguration. ${ liberalNews } SAD`
                }]
            },
            x: {
                label: 'Send spicer to inform media',
                messages: [{
                    type: 'spicer',
                    message: `You dum dums. I have the REAL facts here. Confirmed by ${ crazyNews }, we had to turn away b-list singer Beyonce, because the crowd was too full.`
                }]
            },
            b: {
                label: 'Deal with the issue of voter fraud',
                messages: [{
                    type: 'trump-face',
                    message: 'We can see the real problem. These same pigeons that took the spots of honest Americans, are the same ones voting for the democrats.'
                }]
            }
        },
    },
    {
        event: 'The Secretary of education was caught on camera unable to read a book to second grades',
        region: 'left',
        responses: {
            y: {
                label: 'Talk about the improvements we must make to education',
                messages: [{
                    type: 'trump-face',
                    message: 'Books Lie. Less books!'
                }]
            },
            x: {
                label: 'Reinforce the importance of reading comprehension',
                messages: [{
                    type: 'trump-face',
                    message: 'I love books, books are the best, and Betsy gets that.'
                }]
            },
            b: {
                label: 'Send Kellyanne',
                messages: [{
                    type: 'kellyanne',
                    message: 'Betsy, like Trump, are great readers. I see them reading the greatest books and doing it in the most talented ways.'
                }]
            },
        },
    },
].map(q => ({ ...q, id: id++ }));

const extraResponses = [
    {
        label: 'Do Nothing',
        messages: [{
            type: 'trump-tweet',
            message: `I just heard from ${ crazyNews } the illegals are now using trojan horses #romanfail #americatoosmart`
        }]
    }
];
