const axios = require("axios");
const fs = require("fs");

(async () => {
  const username = "ovasylenko";
  const userUrl = `https://api.github.com/users/${username}/repos`;
  const regex = /FROM\s+node\:\w+/gm;
  const fileName = ".Dockerfile";
  const searchingString = "node:";

  try {
    const response = await axios.get(userUrl);
    const repos = response.data.map((it) => it.name);

    for (let i = 0; i < repos.length; i += 1) {
      const filteredFiles = `https://api.github.com/search/code?q=${searchingString}+in:file+filename:${fileName}+repo:${username}/${repos[i]}`;
      const filteredFilesResponse = await axios.get(filteredFiles);
      const dataArray = filteredFilesResponse.data.items;
      const mappedFile = dataArray.map((it) => it.url);

      for (let k = 0; k < mappedFile.length; k++) {
        const fileResponse = await axios.get(mappedFile[k]);
        const content = fileResponse.data.content;
        const buff = Buffer.from(content, "base64");
        const decoded = buff.toString("ascii");
        const resultArr = decoded.match(regex);
        const result = resultArr.join(" \n") + `\n ${repos[i]} \n`;
        console.log(result);
        fs.appendFile("./results/results.txt", result, (err) => {
          if (err) {
            console.log("ERROR: ", err);
          }
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
})();
