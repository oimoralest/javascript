// Creating require
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import fs from 'fs';

fs.readdir('/', (err, data) => {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Folders:', data);
    }
});
