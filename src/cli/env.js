const parseEnv = () => {
    
    const regexpTemplate = /^RSS_/;
    let variablesKeys = Object.keys(process.env);
    console.log('\x1b[32mThe search for environment variables start with "RSS_" is in progress. See results below:\x1b[0m');
    variablesKeys.forEach((key) => {
        regexpTemplate.test(key) ? console.log(`\x1b[45m${key}=${process.env[key]}\x1b[0m`) : null;
    });
    console.log('\x1b[33mThe search for environment variables start with "RSS_" has done.\x1b[0m');

};

parseEnv();