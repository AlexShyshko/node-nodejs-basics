import { execFile, exec, spawn } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
    
    try {
        
        let childProcessFilePath = path.join(import.meta.dirname, 'files', 'script.js');
        let childProcess = spawn('node', [childProcessFilePath, ...args]);

        childProcess.on('spawn', () => {

            console.log(`\x1b[32mA Child Process from ${childProcessFilePath} has been spawned. To test the Child Process type in something and press ENTER.\x1b[0m`);
            console.log(`\x1b[33mTo exit the Child Process type in "CLOSE" and press ENTER.\x1b[0m`);
        
        });

        childProcess.stdout.pipe(process.stdout);
        process.stdin.pipe(childProcess.stdin);

        childProcess.on('exit', (code, signal) => {
            console.log(`\x1b[33mThe Child Process has been closed.\x1b[0m`);
        })

    } catch(e) {
        console.log(`\x1b[31m${e}\x1b[0m`);
    }

};

// Put your arguments in function call to test this functionality
spawnChildProcess(['All', 'work', 'and', 'no', 'play', 'makes', 'Jack', 'a', 'dull', 'boy']);
