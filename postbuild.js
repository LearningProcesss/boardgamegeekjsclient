const fs = require('fs')
const path = require('path');

if (fs.existsSync(path.join(__dirname, '/dist/index.js'))) {
    fs.readFile(path.join(__dirname, '/dist/index.js'), 'utf-8', (err, data) => {
        data = data.replace('if (process.env.NODE_ENV === \'production\') {', '')
        data = data.replace('module.exports = require(\'./boardgamegeekclient.cjs.production.min.js\')', '')
        data = data.replace('} else {', '')
        data = data.replace('}', '')
        fs.writeFile(path.join(__dirname, '/dist/index.js'), data, (err) => {
            err || console.log('Data replaced \n', data);
        })
    })
}