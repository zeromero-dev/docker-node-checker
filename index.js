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
        const regex = /FROM\s+node\:\w+/gm
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
                        //    console.log(decoded)
                           let resultArr = decoded.match(regex)
                           let result = resultArr.join(' ')
                           console.log(result)
                           let writeToFile = fs.appendFile('./results/results.txt', result, (err) => {
                            console.log("ERROR: ", err)
                          })
                          console.log(writeToFile)
                        //    try{
                        //     let writeSync = fs.writeFileSync('./results/results.txt', result);
                        //    } catch (err) { 
                        //     console.log(err)
                        //    }
                           
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
})()
    