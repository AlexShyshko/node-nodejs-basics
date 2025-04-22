import { FOLDER_NAMES, FILES, ERROR_CONTENT } from './CONST.js';
import { CHECK_EXISTENSE } from './TOOLS.js';
import path from 'path';
import { readFile } from 'fs/promises';

const read = async () => {

    try {

        let readFilePath = path.join(import.meta.dirname, FOLDER_NAMES.EXISTENT_FILES_FOLDER_NAME, FILES.READ_FILE.NAME);
        let doesFileExist = await CHECK_EXISTENSE(readFilePath);

        if (!doesFileExist) {

			let errorOptions = {
				cause: `Error occured in ${import.meta.filename}. The file ${readFilePath} doesn\'t exist.`,
			};
			throw new Error(ERROR_CONTENT.ERROR_MESSAGE, errorOptions);

		} else {

			let readFileContent = await readFile(readFilePath);
			console.log(`The content of a file ${readFilePath} was read successfully:\n${readFileContent}`);
			
		}

    } catch(e) {
        console.log(e);
    }

};

await read();