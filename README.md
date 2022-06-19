# Docker-node-checker

Docker-node-checker is a Node.js script that allows you to scan through user's repository and search for node version in dockerfile.


## Installation
Make sure you have Node.js installed on the system.

Use git to clone the project.

```bash
git clone https://github.com/zeromero-dev/docker-node-checker.git
```

## Usage

```node.js
    const username = 'zeromero-dev'
    #change username to the needed one

      let userUrl = `https://api.github.com/users/${username}/repos`
      const regex = /FROM\s+node\:\w+/gm
      const fileName = '.Dockerfile'

    #you can change the file you want to search for

      const searchingString = 'node:'
    #also the searched string inside the file can be changed
```
## Restrictions

Note, that Github API allows you to make not more than 50 requests per hour. So change the 

```node.js



## Contributing

Pull requests are welcome. <3

## License
[MIT](https://choosealicense.com/licenses/mit/)
