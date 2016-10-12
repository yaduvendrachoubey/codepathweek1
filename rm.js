#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let dirs = []

async function rmfileDir(fileOrDir) {
    //console.log(fileOrDir)
    while(fileOrDir.length > 0) {
    await fs.rmdir(fileOrDir.pop())
   }
}

async function searchFiles(dir) {
// Is the Directory
let files = await fs.readdir(dir)
for (let prop of files) {
 try {
 let fileStats = await fs.stat(dir + '/' +prop)
 if ( await fileStats.isDirectory() )
    {
     console.log('Dir Found' + dir + '/' +prop)
     dirs.push(dir + '/' +prop)
   searchFiles(dir +'/'+ prop)
    
}
else
{
  await fs.unlink(dir + '/' +prop)
  console.log(dir + '/' + prop+ 'file Only')   
}
}
catch (err) {
   console.log(dir + '/' + prop + 'etc')
   await fs.unlink(dir + '/' +prop)
}
}
}


async function rm() {

let inputs = process.argv[2]
await searchFiles(inputs)
//console.log(dirs)
await rmfileDir(dirs)
}

rm()
