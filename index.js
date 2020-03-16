const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-2151991494-1003412629845-TC0VHetPmuaXxc3qfMJ3m0kd',
    name: 'atlanta_lunch'
});

// Start
bot.on('start', () => {
    const params = {
        icon_emoji: ':fat-unicorn:'
    }
    bot.postMessageToChannel('tanyatest', 'lunch menu!', params)
});

// Error
bot.on('error', (err) => console.log(err));

// Message
bot.on('message', (data) => {
    if (data.type != 'message') {
        return;
    }

    console.log(data);
    handleMessage(data.text);
})

// Respond to Slack Message
function handleMessage(message) {
    if (message.includes(' lunch')) {
        GetMenu();
    }
}

const apiConfig = {
    headers: {
        'Cookie': 'optimizelyEndUserId=oeu1579192059882r0.5354951351270523; optimizelyBuckets=%7B%7D; __hstc=266823441.16da2c6a035a0a9c34af2fe595d3304e.1579192062255.1579192062255.1579192062255.1; hubspotutk=16da2c6a035a0a9c34af2fe595d3304e; _gcl_au=1.1.1547972480.1579192062; _ga=GA1.2.890179967.1579192062; _fbp=fb.1.1579192062385.1940682240; hblid=z32zGsPe2lr6XuNm965zL0UBrHWbop63; olfsk=olfsk2276252069419662; __utma=57169786.890179967.1579192062.a1579192094.1579192094.1; __utmz=57169786.1579192094.1.1.utmcsr=fooda.com|utmccn=(referral)|utmcmd=referral|utmcct=/; _sp_id.9401=6f59aeb52b326b01.1579192094.1.1579192097.1579192094.55ba4c0f-ef8e-4310-8c84-aed182b4043f; optimizelySegments=%7B%22786421672%22%3A%22false%22%2C%22786481648%22%3A%22search%22%2C%22786641896%22%3A%22gc%22%7D; _sp_id.3e10=c493ac5f89314c6e.1579192062.1.1579192106.1579192062.080c524b-d39a-472a-a424-3e19c1cf3d24; __cfduid=d2f253092fc8fe2ea3c8cd93882cad27a1582145072; _okdetect=%7B%22token%22%3A%2215821450802370%22%2C%22proto%22%3A%22https%3A%22%2C%22host%22%3A%22app.fooda.com%22%7D; _ok=9653-216-10-5069; _okla=1; _fooda_session=146069b877c9ead49df3ccb2315465e8; context=%7B%22entity%22%3A%22popup_event%22%2C%22id%22%3A789930%7D; myfooda_building_id=; wcsid=v3cdjPGUgggUlNCo965zL0T6Ga9Bbo3A; _okac=04596b856f19d72440c682ee0b0a13e8; _okbk=cd4%3Dtrue%2Ccd5%3Daway%2Cwa1%3Dfalse%2Cvi5%3D0%2Cvi4%3D1583963143649%2Cvi3%3Dactive%2Cvi2%3Dfalse%2Cvi1%3Dfalse%2Ccd8%3Dchat%2Ccd6%3D0%2Ccd3%3Dfalse%2Ccd2%3D0%2Ccd1%3D0%2C; _oklv=1583968489479%2Cv3cdjPGUgggUlNCo965zL0T6Ga9Bbo3A'
    }
}

function GetMenu() {
    axios.get('https://app.fooda.com', apiConfig)
        .then(res => {
            console.log(res.data);
            postMessage();
            // parseHTML(res.data)
        }
        )
}


// function parseHTML(data) {
//     let domparser= new DOMParser();
//     let doc = domparser.parseFromString(data, 'text/html');

//     console.log(doc.getElementsByClassName('cal__day__inner__info'));
//     let menuItems = {

//     }
// }

function postMessage() {
    const params = ':nomnom:'
    bot.postMessageToChannel(
        'tanyatest',
        'lunch is fjsdigsfdgfdg',
        params
    )
}