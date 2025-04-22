const parseArgs = () => {

    const regexpTemplate = /^--/;
    let remainArguments = process.argv.slice(2);
    console.log('\x1b[32mThe search for command line arguments start with "--" is in progress. See results below:\x1b[0m');
    remainArguments.forEach((argument, index, array) => {
        
        if (regexpTemplate.test(argument)) {
            console.log(`\x1b[45m${argument.slice(2)} is ${(regexpTemplate.test(array[index + 1])) ? true : array[index + 1]}\x1b[0m`);
        }

    });
    console.log('\x1b[33mThe search for command line arguments start with "--" has done.\x1b[0m');

};

parseArgs();