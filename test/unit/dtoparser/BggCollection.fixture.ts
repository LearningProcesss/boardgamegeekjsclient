import * as fs from 'fs';
import * as util from 'util';


const readFile = util.promisify(fs.readFile);

export const readFixture = () => {
    return readFile(__dirname + '/collection.json', 'utf8');
}