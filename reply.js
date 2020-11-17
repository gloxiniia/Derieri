const reply = require('./');

reply(process.argv.slice(2).join(' ')).then(response => console.log(response));