const axios = require('axios');

const getUserData = async () => {
    try {
        let userData = await axios.get('https://randomuser.me/api')

        userData.data.results.forEach((item) => {
            console.log(item.name);
        })
    } catch (error) {
        console.log(error.message);
    }

}
getUserData()