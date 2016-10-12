#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
//let args = require('yargs') 

async function mkdir() {
    // Use 'await' in here
    let inputs = await process.argv[2]
    await fs.mkdir(inputs)
}

mkdir()
