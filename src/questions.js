const liberalNews = 'NNC';
const crazyNews = 'Brightbort';
const wackyNews = 'Wolf News';

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
    {
        event: `Courts have deemed Trump's ban on good looking males unconstitutional`,
        region: 'right',
        responses: {
            y: {
                label: `Do an interview with ${ wackyNews }`,
                messages: [{
                    type: 'trump-face',
                    message: `You all agree with me at ${ wackyNews }! Do you guys want court positions?`
                }]
            },
            x: {
                label: 'Give statistic evidence to convince the courts',
                messages: [{
                    type: 'spicer',
                    message: 'Use your heads. It\'s obvious men outside America have caused harm to others. people are murdered by men every year in Germany.'
                }]
            },
            b: {
                label: 'Convince the court through anecdotal evidence',
                messages: [{
                    type: 'trump-face',
                    message: 'Listen Judge, this man with the most ugly skinny tie, see, he gets angry when his sister wants me to, well ya know, and wouldn\'t ya know, my secret service happens to find a bomb in his mailbox addressed to him from Isis the next day'
                }]
            }
        },
    },
    {
        event: `Courts have deemed Trump's ban on good looking males unconstitutional`,
        region: 'right',
        responses: {
            y: {
                label: `Do an interview with ${ wackyNews }`,
                messages: [{
                    type: 'trump-face',
                    message: `You all agree with me at ${ wackyNews }! Do you guys want court positions?`
                }]
            },
            x: {
                label: 'Give statistic evidence to convince the courts',
                messages: [{
                    type: 'spicer',
                    message: 'Use your heads. It\'s obvious men outside America have caused harm to others. people are murdered by men every year in Germany.'
                }]
            },
            b: {
                label: 'Convince the court through anecdotal evidence',
                messages: [{
                    type: 'trump-tweet',
                    message: 'Just cannot believe a judge would put our country in such peril. If something happens blame him and court system. People pouring in. Bad!'
                }]
            }
        },
    },
    {
        event: 'You have a call with Voldemort Poutine regarding Quebecs nuclear programs',
        region: 'top',
        responses: {
            y: {
                label: `Talk at length about America's nuclear agreements with Quebec`,
                messages: [{
                    type: 'trump-face',
                    message: `I'm the best learner. I well learn all about the dangerous green triad, so America well be safe.`
                }]
            },
            x: {
                label: 'Negotiate a good deal with Quebec for Americas safety and prosperity.',
                messages: [{
                    type: 'trump-face',
                    message: 'Quebec has gained too much from these nuclear deals. They\'re all Quebec favored. America first.'
                }]
            },
            b: {
                label: 'Assert America\'s authority.',
                messages: [{
                    type: 'trump-face',
                    message: 'America is winning. You can have your nukes, but we\'ll still win. Sorry Quebec. Ya know? Sorry.'
                }]
            }
        },
    },
].map(q => ({ ...q, id: id++ }));

export const extraResponse = {
    label: 'Do Nothing',
    messages: [{
        type: 'trump-tweet',
        message: `I just heard from ${ crazyNews } the illegals are now using trojan horses #romanfail #americatoosmart`
    }]
};
