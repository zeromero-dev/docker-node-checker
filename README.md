# Docker-node-checker

Docker-node-checker is a Node.js script that allows you to scan through user's repository and search for node version in dockerfile.


## Installation
Make sure you have Node.js installed on the system.

Use git to clone the project.

```bash
git clone https://github.com/zeromero-dev/docker-node-checker.git
```

## Usage

```js
#change username to the needed one
const username = 'zeromero-dev'

#you can change the file you want to search for
const regex = /FROM\s+node\:\w+/gm
const fileName = '.Dockerfile'


const searchingString = 'node:'
#also the searched string inside the file can be changed
```

## Running the script
```node.js
  #to run the script simply write
    node index.js
```
## Restrictions

Note, that Github API allows you to make not more than **50 requests per hour**. So change the value of searchable repositories (10 by default).

```node.js
 for (let i = 0; i < 10; i+=1) 
```

## Contributing

Pull requests are welcome. <3

## License
[MIT](https://choosealicense.com/licenses/mit/)
