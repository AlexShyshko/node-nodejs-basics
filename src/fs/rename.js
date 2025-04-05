import { FOLDER_NAMES, FILES, ERROR_CONTENT } from './CONST.js';
import { CHECK_EXISTENSE } from './TOOLS.js';
import path from 'path';
import { rename as renameFile } from 'fs/promises';

const rename = async () => {

    try {
    
        let wrongFilePath = path.join(import.meta.dirname, FOLDER_NAMES.EXISTENT_FILES_FOLDER_NAME, FILES.WRONG_FILE.NAME);
        let renamedFilePath = path.join(import.meta.dirname, FOLDER_NAMES.EXISTENT_FILES_FOLDER_NAME, FILES.WRONG_FILE.NEW_NAME);
        let doesWrongExist = await CHECK_EXISTENSE(wrongFilePath);
        let doesRenamedExist = await CHECK_EXISTENSE(renamedFilePath);

        if (!doesWrongExist || doesRenamedExist) {

            let errorOptions = {
				cause: `Error occured in ${import.meta.filename}. ${!doesWrongExist ? (wrongFilePath + ' doesn\'t exist. ') : ''}${doesRenamedExist ? (renamedFilePath + ' has already exist.') : ''}`,
			};
			throw new Error(ERROR_CONTENT.ERROR_MESSAGE, errorOptions);

        } else {

            await renameFile(wrongFilePath, renamedFilePath);
            console.log(`The file "${FILES.WRONG_FILE.NAME}" was renamed successfully to "${FILES.WRONG_FILE.NEW_NAME}" in folder ${path.join(import.meta.dirname, FOLDER_NAMES.EXISTENT_FILES_FOLDER_NAME)}`);

        }

    } catch (e) {
        console.log(e);
    }   

};

await rename();