require('dotenv').config({ path: '.env' });
require('./../../db/mongo')()
const seeder = process.argv[2] || null;
const arr = []

if (!seeder || seeder === 'index') {
    console.error('Please provide seeder name or type all for running all seeders.');
    process.exit(1);
} else
if (seeder === 'all') {
    const fs = require('fs');
    fs.readdirSync(__dirname).map(function(file) {
        if (file !== 'index.js') {
            arr.push(require('./' + file));
        }
    })
} else {
    arr.push(require('./' + seeder));
}
Promise.all(arr).then((val) => {
    process.exit(1)
});