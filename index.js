    const axios = require('axios');
    // const request = require('request');

    

    // request(userUrl), { json: true }, (err, res, body) => {
    //     if(err) { return console.log(err) }
    // }
    // console.log()
   
    (async () => {
        const username = 'ovasylenko'
        let userUrl = `https://api.github.com/users/${username}/repos`
        const regex = /[a-zA-Z].Dockerfile/g

        let repoArray = await axios.get(userUrl)
            .then(response => {
               var repos = response.data.map(it => it.name)
            console.log(repos) 

            for (let i = 0; i < 1; i+=1) { //change 2 to repos.length
                let repoUrl = `https://api.github.com/repos/${username}/${repos[i]}/git/trees/master?recursive=1`
                    axios.get(repoUrl)
                    .then(response => {
                     let dataArray = response.data //response.data
                     let dataTree = dataArray.tree
                     let filteredFolder = dataTree.filter((it) => {
                         return it.path === 'docker'
                     })
                    //  let dockerTree = filteredFolder.tree
                    //  let fileTree = dockerTree.filter(it => {
                    //      return (it.path).match(regex)
                    //  })

                    //  let mappedPath = dataTree.map(it => it.path)
                    //     let filtered =  mappedPath.filter((current, index, array) => {
                    //        mappedPath === ''
                    //     })


                    //  for(let k = 0; k < dataTree.length; k++){
                    //     let acc = []
                    //     let mappedPath = dataTree.map(it => it.path)
                    //     if(mappedPath === '//regulartd'){
                    //         dataTree[k] += acc //and go to the objects url
                    //     }
                    //  }
                     
                     
                    console.log(dataTree) 
                })
            }
    })
    .catch(err => {
        console.log(err);
    })

    // function firstLineChecker(){
    //     for(let i = 0; i < ;i++)
    // }


    function b64_to_utf8( str ) {
        return decodeURIComponent(escape(window.atob( str )));
      }

    })()
    // //2. get all files in repo

    // axios.get(`https://api.github.com/repos/${username}/[REPO]/git/trees/master?recursive=1`).then(response => {

    // }).catch(err => {
    //     console.log(err);
    // })