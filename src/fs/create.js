import { FOLDER_NAMES, FILES, ERROR_CONTENT } from './CONST.js';
import { CHECK_EXISTENSE } from './TOOLS.js';
import path from 'path';
import { writeFile } from 'fs/promises';

const create = async () => {

	try {

		let newFilePath = path.join(import.meta.dirname, FOLDER_NAMES.EXISTENT_FILES_FOLDER_NAME, FILES.NEW_FILE.NAME);
		let doesFileExist = await CHECK_EXISTENSE(newFilePath);

		if (doesFileExist) {

			let errorOptions = {
				cause: `Error occured in ${import.meta.filename}. The file ${newFilePath} has already exist.`,
			};
			throw new Error(ERROR_CONTENT.ERROR_MESSAGE, errorOptions);

		} else {

			await writeFile(newFilePath, FILES.NEW_FILE.CONTENT);
			console.log(`The file ${newFilePath} was created successfully.`);
			
		}

	} catch (e) {
		console.log(e);
	}

};

await create();
