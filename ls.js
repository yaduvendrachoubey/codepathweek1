#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
//let args = require('yargs') 


async function searchFiles(dir) {
// Is the Directory
let files = await fs.readdir(dir)
for (let prop of files) {
 try {
 let fileStats = await fs.stat(dir + '/' +prop)
 if ( await fileStats.isDirectory() )
    {
   searchFiles(dir +'/'+ prop)
}
else
{
  console.log(dir + '/' + prop)
}
}
catch (err) {
   console.log(dir + '/' + prop)
}
}
}

async function ls() {
    // Use 'await' in here
    let inputs = await process.argv[2]
    searchFiles(inputs)
}

//ls()
exports.ll = (dir) => searchFiles(dir)
