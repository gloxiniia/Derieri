# Derieri
#### An implementation of the cleverbot chatbot system
---
[![Node Version](https://img.shields.io/badge/Node-v12.19.0-!.svg?logo=node.js&style=plastic&color=green)](https://nodejs.org/en/download/) ![License](https://img.shields.io/npm/l/derieri.svg?style=plastic&color=green&label=License) [![Stargazers](https://img.shields.io/github/stars/gloxiniia/derieri.svg?style=plastic&color=yellow&label=Stars)](https://github.com/gloxiniia/derieri/stargazers) [![Issues](https://img.shields.io/github/issues/gloxiniia/derieri.svg?style=plastic&color=yellow&label=Issues)](https://github.com/gloxiniia/derieri/issues) [![Pull Requests](https://img.shields.io/github/issues-pr/gloxiniia/derieri.svg?style=plastic&color=yellow&label=Pull%20Requests)](https://github.com/gloxiniia/derieri/pulls) 
![Npm Statistics](https://nodei.co/npm/derieri.svg?downloads=true&downloadRank=true&stars=true)

# Project
---
#### Coding
```js
const Derieri = require('derieri');
const deri = new Derieri.Client({
    islearning: true,
    context: false
});

deri.reply('Hello! How are you?').then(response => {
    // Print the response
    console.log(response);
});
```

##### Special thanks to [NithishPravin](https://github.com/NithishPravin) for the idea