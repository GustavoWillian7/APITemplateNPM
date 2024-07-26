require('dotenv').config({ path : '.env' })

const mongoose = require('mongoose')

async function main() {
    await mongoose.connect(process.env.DATABASE)
    console.log('Conectou ao Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose
