const fs = require('fs'); 
const json = require("./a.json"); 
const data = 'Hello, World!'; 

for (let i = 0; i < json.length; i++) {
    fs.appendFileSync('example.txt', `\n # ${i + 1} ${json[i].name}`, (err) => {  
        if (err) throw err;
    });

    fs.appendFileSync('example.txt', `\n ${json[i].description}`, (err) => {  
        if (err) throw err;
    });

    fs.appendFileSync('example.txt', `\n ## ⚙️ Tech Stack`, (err) => {  
        if (err) throw err;
    });

    for (let j = 0; j < json[i].tech.length; j++) {
        fs.appendFileSync('example.txt', `\n* ${json[i].tech[j]}`, (err) => {  
            if (err) throw err;
        });
    }

    fs.appendFileSync('example.txt', `\n ## 🔗 Links`, (err) => {  
        if (err) throw err;
    });

  fs.appendFileSync('example.txt', `\n * ${json[i].repo}`, (err) => {  
        if (err) throw err;
    });

    if (json[i].hasOwnProperty("liveLink")) {
        fs.appendFileSync('example.txt', `\n * ${json[i].liveLink}`, (err) => {  
            if (err) throw err;
        });
    }

    fs.appendFileSync('example.txt', `\n`, (err) => {  
        if (err) throw err;
    });

    fs.appendFileSync('example.txt', `\n`, (err) => {  
        if (err) throw err;
    });
    fs.appendFileSync('example.txt', `\n`, (err) => {  
        if (err) throw err;
    });
    fs.appendFileSync('example.txt', `\n`, (err) => {  
        if (err) throw err;
    });

  console.log("Done!");

}