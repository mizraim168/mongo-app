const { exec } = require("child_process");

exec("mongodump -d sample_airbnb -o/backup", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

// https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a