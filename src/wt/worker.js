import { parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread

    try {

        parentPort.on('message', (number) => {

            let computationResult = nthFibonacci(number);
            parentPort.postMessage(computationResult);

        })

    } catch(e) {

        console.log(`\x1b[31m${e}\x1b[0m`);
        parentPort.postMessage(e);

    }

};

sendResult();