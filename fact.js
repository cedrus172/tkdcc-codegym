const axios = require('axios').default;

const getInfo = async function (url) {
    let content = "";
    try {
        res = await axios.get(url);
        if (res.status == 200) {
            content = res.data;
        }
        return content;
    } catch (error) {
        content = error.message;
        return content;
    }

}

const run = async () => {
    let hehe = await getInfo('https://catfact.ninja/fac')
    console.log(hehe);
}

run();