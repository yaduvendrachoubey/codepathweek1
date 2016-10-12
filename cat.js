#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function cat() {
    // Use 'await' in here
    let inputs = await process.argv[2]
    let data = await fs.readFile(inputs, 'utf-8')
    console.log(data)
    //console.log(await fs.readFile(inputs, 'utf-8'))
}

cat()
