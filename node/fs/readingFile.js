// Creating require
import {createRequire} from 'module'
const require = createRequire(import.meta.url)

// Importing fs (file system)
import fs from "fs";

// Reading file with require, this creates an object
const datajson = require('./data.json')
console.log(datajson.name)

// Reading file with require, this creates an string that needs to be parsed
fs.readFile('./data.json', 'utf-8', (err, data) => {
    const dataparsed = JSON.parse(data)
    console.log(dataparsed.name)
})