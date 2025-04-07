import path from 'path';
import { createWriteStream } from 'fs';

const write = async () => {

    try {

        let filePath = path.join(import.meta.dirname, 'files', 'fileToWrite.txt');
        let writeStream = createWriteStream(filePath);
        console.log(`\x1b[32mType any content below. To exit press CTRL+C (for Windows).\x1b[0m`);

        process.stdin.on('data', (input) => {
            writeStream.write(input);
        });

        process.on('SIGINT', () => {

            writeStream.end(() => {
                
                console.log(`\x1b[33mOpen the file ${filePath} to see the result.\x1b[0m`);
                process.exit(0);

            });

        });

    } catch(e) {
        console.log(`\x1b[31m${e}\x1b[0m`);
    }

};

await write();