#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function touch() {
    // Use 'await' in here
    let inputs = await process.argv[2]
    try { 
    		let fileStats = await fs.stat(inputs)
    		if ( await fileStats.isFile() )
        	{
       			// file exists - change only the file attributes - ( access and modified time)
       			var timeInSeconds = new Date();
       			var seconds = Math.round(timeInSeconds.getTime() / 1000);
       			await fs.utimes(inputs,seconds,seconds)
    		}		
    		else
    		{
       			console.log('file not found')
       
    		}
    	}
    catch (err) {
         		await fs.writeFile(inputs,'')
}		

}

touch()
