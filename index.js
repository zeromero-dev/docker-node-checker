    const axios = require('axios');
    // const request = require('request');

    

    // request(userUrl), { json: true }, (err, res, body) => {
    //     if(err) { return console.log(err) }
    // }
    // console.log()
   
    (async () => {
        const username = 'ovasylenko'
        let userUrl = `https://api.github.com/users/${username}/repos`

        let repoArray = await axios.get(userUrl)
            .then(response => {
                response.data.map(it => it.name)
        // Object.entries(response).map(it => it.name)
        // return response.map(it => it.name)
        console.log(response.data.map(it => it.name)) 
    })
    .catch(err => {
        console.log(err);
    })

    })()
    // //2. get all files in repo

    axios.get(`https://api.github.com/repos/${username}/[REPO]/git/trees/master?recursive=1`).then(response => {
        
    }).catch(err => {
        console.log(err);
    })