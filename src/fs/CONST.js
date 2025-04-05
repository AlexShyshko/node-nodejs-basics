// folder names
const FOLDER_NAMES = {
	EXISTENT_FILES_FOLDER_NAME: 'files',
	COPIED_FILES_FOLDER_NAME: 'files_copy',
};

// files content
const FILES = {
	NEW_FILE: {
		NAME: 'fresh.txt',
		CONTENT: 'I am fresh and young',
	},
	WRONG_FILE: {
		NAME: 'wrongFilename.txt',
		NEW_NAME: 'properFilename.md',
	},
	REMOVE_FILE: {
		NAME: 'fileToRemove.txt',
	},
};

// error content
const ERROR_CONTENT = {
	ERROR_MESSAGE: 'FS operation failed',
};

export { FOLDER_NAMES, FILES, ERROR_CONTENT };
