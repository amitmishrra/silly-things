const fs = require('fs'); // Require the File System module
const json = require("./a.json"); // The path to the JSON file
const data = 'Hello, World!'; // The text you want to write in the file


for (let i = 0; i < json.length; i++) {
    fs.appendFileSync('example.txt', `\n # ${i + 1} ${json[i].name}`, (err) => { // Write the file
        if (err) throw err;
    });

    fs.appendFileSync('example.txt', `\n ${json[i].description}`, (err) => { // Write the file
        if (err) throw err;
    });

    fs.appendFileSync('example.txt', `\n ## ⚙️ Tech Stack`, (err) => { // Write the file
        if (err) throw err;
    });

    for (let j = 0; j < json[i].tech.length; j++) {
        fs.appendFileSync('example.txt', `\n* ${json[i].tech[j]}`, (err) => { // Write the file
            if (err) throw err;
        });
    }

    fs.appendFileSync('example.txt', `\n ## 🔗 Links`, (err) => { // Write the file
        if (err) throw err;
    });

  fs.appendFileSync('example.txt', `\n * ${json[i].repo}`, (err) => { // Write the file
        if (err) throw err;
    });

    if (json[i].hasOwnProperty("liveLink")) {
        fs.appendFileSync('example.txt', `\n * ${json[i].liveLink}`, (err) => { // Write the file
            if (err) throw err;
        });
    }

    fs.appendFileSync('example.txt', `\n`, (err) => { // Write the file
        if (err) throw err;
    });

    fs.appendFileSync('example.txt', `\n`, (err) => { // Write the file
        if (err) throw err;
    });
    fs.appendFileSync('example.txt', `\n`, (err) => { // Write the file
        if (err) throw err;
    });
    fs.appendFileSync('example.txt', `\n`, (err) => { // Write the file
        if (err) throw err;
    });

  console.log("Done!");

}