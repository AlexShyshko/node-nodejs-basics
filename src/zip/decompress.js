import path from 'path';
import { createReadStream } from 'fs';
import { createGunzip } from 'zlib';
import { access, constants, createWriteStream } from 'fs';

const decompress = async () => {
    
    try {

        let sourceFilePath = path.join(import.meta.dirname, 'files', 'archive.gz');

        access(sourceFilePath, constants.R_OK, (e) => {

            if (e) {
                console.log(`\x1b[31m${e}\x1b[0m`);
            } else {

                let targetFilePath = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
                let readStream = createReadStream(sourceFilePath);
                let fileDecompressor = createGunzip();
                let writeStream = createWriteStream(targetFilePath);

                readStream.pipe(fileDecompressor).pipe(writeStream);
                console.log(`\x1b[32mCheck the decompressed file ${targetFilePath}\x1b[0m`);

            }

        });

    } catch(e) {
        console.log(`\x1b[31m${e}\x1b[0m`);
    }

};

await decompress();