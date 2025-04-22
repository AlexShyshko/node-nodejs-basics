import path from 'path';
import { createReadStream } from 'fs';

const read = async () => {
    
    try {

        let filePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');
        let readStream = createReadStream(filePath);
        console.log(`\x1b[32mSee the content of ${filePath} below:\x1b[0m`);

        readStream.on('data', (chunk) => {
            process.stdout.write(`\x1b[45m${chunk}\x1b[0m`);
        });

        readStream.on('end', () => {
            console.log(`\x1b[33m\nThe end of the content.\x1b[0m`);
        });

    } catch(e) {
        console.log(`\x1b[31m${e}\x1b[0m`);
    }

};

await read();