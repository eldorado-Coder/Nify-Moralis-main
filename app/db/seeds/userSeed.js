const faker = require("faker");
const bcrypt = require('bcrypt');
const User = require('./../../model/user');

async function seedDB() {
    try {
        for (let i = 0; i < 10; i++) {
            const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
            const email = faker.internet.email();
            const password = await bcrypt.hash('secret', 10)
            await User.create({
                name,
                email,
                password,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
        }
        console.log("User database seeded! :)");
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = seedDB();