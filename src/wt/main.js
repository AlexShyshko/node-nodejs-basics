import { availableParallelism } from 'os';
import path from 'path';
import { Worker } from 'worker_threads';

const performCalculations = async () => {

    try {

        const INITIAL_NUMBER_TO_POST_TO_WORKER = 10;
        const AVAILABLE_CPU_CORES_NUMBER = availableParallelism();
        let workerFilePath = path.join(import.meta.dirname, 'worker.js');
        let workerPromises = [];
        
        for (let i = 0; i < AVAILABLE_CPU_CORES_NUMBER; i++) {
    
            let promise = new Promise((resolve, reject) => {
    
                let numberToPass = INITIAL_NUMBER_TO_POST_TO_WORKER + i;
                let worker = new Worker(workerFilePath);
                worker.postMessage(numberToPass);
    
                worker.on('message', (message) => {
    
                    if (message instanceof Error) {
                        reject();
                    } else {
                        resolve(message);
                    }
                    
                    worker.terminate();
    
                })
    
                worker.on('error', (e) => {
    
                    reject();
                    worker.terminate();
    
                });
    
            });
    
            workerPromises.push(promise);
    
        }
    
        Promise.allSettled(workerPromises).then((allSettledResult) => {
    
            let completedWorkerPromisesReport = allSettledResult.map((oneWorkerPromise) => {
    
                let report = {
                    status: oneWorkerPromise.status === 'fulfilled' ? 'resolved' : 'error',
                    data: oneWorkerPromise.status === 'fulfilled' ? oneWorkerPromise.value : null,
                };
    
                return report;
    
            })
    
            console.log(`\x1b[32mAll worker threads have been processed. See the result below:\x1b[0m`);
            console.log(completedWorkerPromisesReport);
    
        }).catch((e) => {
            console.log(`\x1b[31m${e}\x1b[0m`);
        });

    } catch(e) {
        console.log(`\x1b[31m${e}\x1b[0m`);
    }

};

await performCalculations();