    const axios = require('axios');
    const fs = require('fs');
    // const request = require('request');

    

    // request(userUrl), { json: true }, (err, res, body) => {
    //     if(err) { return console.log(err) }
    // }
    // console.log()
   
    (async () => {
        const username = 'ovasylenko'
        let userUrl = `https://api.github.com/users/${username}/repos`
        const regex = /[a-zA-Z].Dockerfile/g
        const fileName = '.Dockerfile'
        const searchingString = 'node:'

        let repoArray = await axios.get(userUrl)
            .then(response => {
               var repos = response.data.map(it => it.name)
            console.log(repos) 
                //https://api.github.com/search/code?q=${searchingString}+in:file+filename:${fileName}+repo:${username}/${repos[i]}
            for (let i = 0; i < 1; i+=1) { //change 2 to repos.length
                // let repoUrl = `https://api.github.com/repos/${username}/${repos[i]}/git/trees/master?recursive=1`
                    let filteredFiles = `https://api.github.com/search/code?q=${searchingString}+in:file+filename:${fileName}+repo:${username}/skillcrucial-react-redux-boilerplate` //change to ${repos[i]}
                    axios.get(filteredFiles)
                    .then(response => {
                     let dataArray = response.data.items//response.data
                     let mappedFile = dataArray.map(it => (it.url))
                     console.log(mappedFile)

                     for(let k = 0; k < mappedFile.length ;k++){
                         axios.get(mappedFile[k])
                         .then(response => {
                            let content =  response.data.content
                            let buff = Buffer.from(content, 'base64');
                            let decoded = buff.toString('ascii')
                           console.log(decoded)
                           let firstLine = decoded.split('\n')[0]; // change to working thing
                           console.log(firstLine)
                        //    fs.writeFileSync('/tmp/test-sync', firstLine);
                         })
                     
                         
                     }
                        // let mappedString = mappedFile.join(', ')
                      

                    //  axios.get(mappedString)
                    //  .then(response =>{
                    //      let fileProperties = response.data
                    //      let encryptedData = fileProperties.map(it => it.content)
                    //     console.log(encryptedData) 
                         
                    //     //  let decoder = atob(encryptedData)
                    //      // reecnrypt data
                          

                    //  })
                    //  /////////////////
                    //  let dataTree = dataArray.tree
                    //  let filteredFolder = dataTree.filter((it) => {
                    //      return it.path === 'docker'
                    //  })
                    //  let dockerTree = filteredFolder.tree
                    //  let fileTree = dockerTree.filter(it => {
                    //      return (it.path).match(regex)
                    //  })

                    
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