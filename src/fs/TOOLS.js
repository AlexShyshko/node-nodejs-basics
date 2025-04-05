import { access } from 'fs/promises';

async function CHECK_EXISTENSE(fileOrDirectoryPath, yyy, ooo) {

	const DOES_EXIST = await access(fileOrDirectoryPath)
		.then(() => {
			return true;
		})
		.catch(() => {
			return false;
		});

	return DOES_EXIST;
	
}

export { CHECK_EXISTENSE };
