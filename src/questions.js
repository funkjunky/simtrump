const liberalNews = 'NNC';
const crazyNews = 'Brightbort';
const wackyNews = 'Wolf News';

export const defaultResponses = {
    y: {
        label: 'Engage with the public through social media',
        messages: [{
            type: 'trump-tweet',
            message: 'WHAT THEY ARE SAYING ABOUT THE CLINTON CAMPAIGN’S ANTI-CATHOLIC BIGOTRY'
        }]
    },
    x: {
        label: 'Send the national gaurd',
        messages: [{
            type: 'trump-tweet',
            message: 'America is safe now that the terrorist protestors are quelled. North Dakota Burned down, but thats ok.'
        }]
    },
    b: {
        label: 'Consult experts in their respective fields',
        messages: [{
            type: 'trump-tweet',
            message: 'Ya know, I heard on Fox News that Russia has a cure for global warming! For when it happens, ya know.'
        }]
    },
    a: {
        label: 'Golf',
        messages: [{
            type: 'trump-tweet',
            message: 'Beautiful day on my golf course, everyone should come, so green.'
        }]
    }
}

let id = 0;
export const questions = [
    {
        event: `${ liberalNews } Just reported that there were more pigeons than people at the inauguration.`,
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
    {
        event: 'A building inspector claims he detected traces of gas in the Oval Office',
        responses: {
            y: {
                label: 'Question legitimacy of media',
                messages: [{
                    type: 'trump-tweet',
                    message: 'GULLIBLE Media believes word of random bozo off street! Not real inspector! WH running in tiptop shape! All code up to date. I know buildings!',
                }]
            },
            x: {
                label: 'Send Spicer to ensure the public',
                messages: [{
                    type: 'trump-face',
                    message: 'Those are unstantiated claims. We had top-to-bottom inspections done. I\'m sure if there was a gas leak we would have smelled it.'
                }]
            },
            b: {
                label: `Have kellyanne talk to ${ wackyNews }`,
                messages: [{
                    type: 'trump-face',
                    message: 'There are no leaks. I also think it\'s terrible how the media has resorted to such low-level lies to defame our president. They\'re so desperate for leaks'
                }]
            }
        },
    },
    {
        event: 'New reports claim that two aides hired in the Trump Campaign spent four months "interning" in Moscow.',
        responses: {
            y: {
                label: `Ensure the public the interns were checked, and stay on topic.`,
                messages: [{
                    type: 'trump-face',
                    message: ` I don't know them. There were many people -- very good people -- who helped out with my campaign -- which was extremely successful.`,
                }]
            },
            x: {
                label: 'Send Spicer',
                messages: [{
                    type: 'trump-face',
                    message: 'I can\'t speak for the entire lives of all the staff who worked on President Trump\'s campaign. But what I can say that everyone there was a real American',
                }]
            },
            b: {
                label: 'Have Kellyanne gives comforting facts on day time news.',
                messages: [{
                    type: 'trump-face',
                    message: 'If you actually bothered to research those claims, you\'d find that those aides had interned in Moscow as part of an international sciences degree, and they also worked in Bangkok, Johannesburg, and Krakow, among others.',
                }]
            }
        },
    },
    {
        event: 'Trump signs bill to reduce taxes for all real estate businesses building in the United States.',
        responses: {
            y: {
                label: `Ensure the public that the economy well grow.`,
                messages: [{
                    type: 'trump-face',
                    message: `Of course I signed a bill encouraging real estate. I'm a real estate guy. No one builds better than me. So this bill is important, and nobody can assure you that better than me.`
                }]
            },
            x: {
                label: 'Have Spicer talk',
                messages: [{
                    type: 'trump-face',
                    message: 'President Trump created and signed this bill because with his real estate expertise, he knew precisely just how beneficial it would be for the American people. It\'s going to save people money',
                }]
            },
            b: {
                label: 'Bring Kellyanne to Wolf and Pals',
                messages: [{
                    type: 'trump-face',
                    message: 'He\'s not doing this for himself. He\'s not involved with his company anymore. He did this, as he does everything, for the good of the American citizens.',
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
