const fs = require("fs") //file system module

fs.writeFileSync("notes.txt","My name is sayalee chavan") // first time write a file    

fs.appendFileSync("notes.txt", " appended text") // append text to already written file
