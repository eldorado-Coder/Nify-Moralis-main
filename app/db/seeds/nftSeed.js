const ObjectID = require('mongodb').ObjectID;
const faker = require("faker");
const Nft = require('./../../model/nft');
const nftType = ['image', 'video'];
const nftDescriptions = [
    `Mahalo! I'm Kitty. I'm a professional Foreign Film Director and I love steak`,
    `Allo. I'm Kitty. My cousin twice removed is Sir John A. MacDonald.`
];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomStringFromArray(array) {
    return array[randomIntFromInterval(0, array.length - 1)]
}

async function seedDB() {
    try {
        for (let i = 0; i < 50; i++) {
            const description = getRandomStringFromArray(nftDescriptions);
            const type = getRandomStringFromArray(nftType);
            const name = faker.name.firstName()
            const like = randomIntFromInterval(1, 50)
            const userId = new ObjectID()
            await Nft.create({
                description,
                type,
                name,
                asset: 'example.jpg',
                like,
                userId
            });
        }
        console.log("Nft database seeded! :)");
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = seedDB();