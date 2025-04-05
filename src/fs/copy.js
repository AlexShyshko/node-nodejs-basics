import { FOLDER_NAMES, ERROR_CONTENT } from './CONST.js';
import { CHECK_EXISTENSE } from './TOOLS.js';
import path from 'path';
import { readdir, mkdir, copyFile } from 'fs/promises';

const copy = async () => {

    try {

        let existentFolderPath = path.join(import.meta.dirname, FOLDER_NAMES.EXISTENT_FILES_FOLDER_NAME);
        let copiedFolderPath = path.join(import.meta.dirname, FOLDER_NAMES.COPIED_FILES_FOLDER_NAME);
        let doesFolderExist = await CHECK_EXISTENSE(existentFolderPath);
        let doesCopiedFolderExist = await CHECK_EXISTENSE(copiedFolderPath);

        if (!doesFolderExist || doesCopiedFolderExist) {

			let errorOptions = {
				cause: `Error occured in ${import.meta.filename}. ${!doesFolderExist ? (existentFolderPath + ' doesn\'t exist. ') : ''}${doesCopiedFolderExist ? (copiedFolderPath + ' has already exist.') : ''}`,
			};
			throw new Error(ERROR_CONTENT.ERROR_MESSAGE, errorOptions);

        } else {
            
            await mkdir(copiedFolderPath);
            let filesToCopy = await readdir(existentFolderPath);

            filesToCopy.forEach(async (file) => {

                let copyFrom = path.join(existentFolderPath, file);
                let copyTo = path.join(copiedFolderPath, file);
                await copyFile(copyFrom, copyTo);

            });

            console.log(`The folder ${copiedFolderPath} was copied successfully.`);

        }
        
    } catch (e) {
        console.log(e);
    }    

};

await copy();
