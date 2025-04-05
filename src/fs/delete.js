import { FOLDER_NAMES, FILES, ERROR_CONTENT } from './CONST.js';
import { CHECK_EXISTENSE } from './TOOLS.js';
import path from 'path';
import { unlink } from 'fs/promises';

const remove = async () => {

    try {

        let removeFilePath = path.join(import.meta.dirname, FOLDER_NAMES.EXISTENT_FILES_FOLDER_NAME, FILES.REMOVE_FILE.NAME);
        let doesFileExist = await CHECK_EXISTENSE(removeFilePath);

        if (!doesFileExist) {

			let errorOptions = {
				cause: `Error occured in ${import.meta.filename}. The file "${FILES.REMOVE_FILE.NAME}" doesn\'t exist in ${path.join(import.meta.dirname, FOLDER_NAMES.EXISTENT_FILES_FOLDER_NAME)}.`,
			};
			throw new Error(ERROR_CONTENT.ERROR_MESSAGE, errorOptions);

		} else {

			await unlink(removeFilePath);
			console.log(`The file "${FILES.REMOVE_FILE.NAME}" was removed successfully.`);
			
		}

    } catch(e) {
        console.log(e);
    }

};

await remove();