import fs from 'fs';

const data = {
    name: 'Bob',
};

fs.writeFile('write.json', JSON.stringify(data), (err) => {
    if (err) console.log(err);
});
