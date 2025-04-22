import path from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {

    try {

        let filePath = path.join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');
        let hash = createHash('SHA256');
        let readStream = createReadStream(filePath);
        
        readStream.on('data', (chunk) => {
            hash.update(chunk);
        });
    
        readStream.on('end', () => {
            console.log(`\x1b[32mThe HEX hash for ${filePath} is: \x1b[33m${hash.digest('hex')}\x1b[0m`);
        });

    } catch(e) {
        console.log(`\x1b[31m${e}\x1b[0m`);
    }

};

await calculateHash();