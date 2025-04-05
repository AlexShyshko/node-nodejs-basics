import { FOLDER_NAMES, ERROR_CONTENT } from './CONST.js';
import { CHECK_EXISTENSE } from './TOOLS.js';
import path from 'path';
import { readdir } from 'fs/promises';

const list = async () => {
    
    try {

        let existentFolderPath = path.join(import.meta.dirname, FOLDER_NAMES.EXISTENT_FILES_FOLDER_NAME);
        let doesFolderExist = await CHECK_EXISTENSE(existentFolderPath);

        if (!doesFolderExist) {

			let errorOptions = {
				cause: `Error occured in ${import.meta.filename}. ${existentFolderPath} doesn\'t exist.`,
			};
			throw new Error(ERROR_CONTENT.ERROR_MESSAGE, errorOptions);

        } else {

            let filesList = await readdir(existentFolderPath);
            let reportTitle = `${existentFolderPath} contains ${filesList.length} file(s):`;
            filesList = filesList.map((file, index) => {
                return `${++index}) ${file}`;
            });
            filesList.unshift(reportTitle);
            let reportForConsole = filesList.join('\n');
            console.log(reportForConsole);

        }

    } catch(e) {
        console.log(e);
    }

};

await list();