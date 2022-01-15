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
               var repos = response.data.map(it => it.name)
            console.log(repos) 

            for (let i = 0; i < 2; i+=1) {
                let repoUrl = `https://api.github.com/repos/${username}/${repos[i]}/git/trees/master?recursive=1`
                    axios.get(repoUrl)
                    .then(response => {
                     let dataArray = response.data //response.data

                    //  for(let k = 0; k < dataArray.length; k++){
                    //     let mappedPath = dataArray.map(it => it.path)
                    //     if(mappedPath === '//regulartd'){
                    //         return dataArray[k] //and go to the objects url
                    //     }
                    //  }
                     
                     
                    console.log(dataArray) 
                })
            }
    })
    .catch(err => {
        console.log(err);
    })

    function b64_to_utf8( str ) {
        return decodeURIComponent(escape(window.atob( str )));
      }

    })()
    // //2. get all files in repo

    // axios.get(`https://api.github.com/repos/${username}/[REPO]/git/trees/master?recursive=1`).then(response => {

    // }).catch(err => {
    //     console.log(err);
    // })