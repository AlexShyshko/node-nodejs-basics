import path from 'path';
import { createReadStream } from 'fs';
import { createGzip } from 'zlib';
import { createWriteStream } from 'fs';

const compress = async () => {
    
    try {

        let sourceFilePath = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
        let targetFilePath = path.join(import.meta.dirname, 'files', 'archive.gz');
        let readStream = createReadStream(sourceFilePath);
        let fileCompressor = createGzip();
        let writeStream = createWriteStream(targetFilePath);

        readStream.pipe(fileCompressor).pipe(writeStream);
        console.log(`\x1b[32mCheck the compressed file ${targetFilePath}\x1b[0m`);

    } catch(e) {
        console.log(`\x1b[31m${e}\x1b[0m`);
    }

};

await compress();