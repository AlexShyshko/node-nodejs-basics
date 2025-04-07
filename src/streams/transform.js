import { Transform } from 'stream';

const transform = async () => {
    
    try {

        class ReverseTransformer extends Transform {
            _transform(chunk, encoding, callback) {
                let stringifiedChunk = String(chunk).trim();
                let reversedStringifiedChunk = stringifiedChunk.split('').reverse().join('');
                callback(null, `\x1b[45m${reversedStringifiedChunk}\x1b[0m\n`);
            }
        };

        let readStream = process.stdin;
        let reverseTransformer = new ReverseTransformer();
        let writeStream = process.stdout;

        readStream.pipe(reverseTransformer).pipe(writeStream);
        console.log(`\x1b[32mType any content below, press ENTER and check the result of a transform stream. To exit press CTRL+C (for Windows).\x1b[0m`);

        process.on('SIGINT', () => {

            readStream.end(() => {
                
                console.log(`\x1b[33mCheck results of a reverse transformation above.\x1b[0m`);
                process.exit(0);

            });

        });

    } catch(e) {
        console.log(`\x1b[31m${e}\x1b[0m`);
    }


};

await transform();