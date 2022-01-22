    const axios = require('axios');
    const fs = require('fs');
   
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
               
            for (let i = 0; i < 10; i+=1) { //change 2 to repos.length
                    let filteredFiles = `https://api.github.com/search/code?q=${searchingString}+in:file+filename:${fileName}+repo:${username}/${repos[i]}` //change to ${repos[i]} //skillcrucial-react-redux-boilerplate
                    axios.get(filteredFiles)
                    .then(response => {
                     let dataArray = response.data.items
                     let mappedFile = dataArray.map(it => (it.url))
                     console.log(mappedFile)

                     for(let k = 0; k < mappedFile.length ;k++){
                         axios.get(mappedFile[k])
                         .then(response => {
                            let content =  response.data.content
                            let buff = Buffer.from(content, 'base64');
                            let decoded = buff.toString('ascii')
                      
                           let resultArr = decoded.match(regex)
                           let result = resultArr.join(' \n') + `\n skillcrucial-react-redux-boilerplate \n` //change to ${repos[i]}
                           console.log(result)
                           let writeToFile = fs.appendFile('./results/results.txt', result, (err) => {
                            console.log("ERROR: ", err)
                          })
                         }) 
                     }
                })
            }
    })
    .catch(err => {
        console.log(err);
    })
})()
    