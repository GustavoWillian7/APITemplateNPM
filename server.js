require('dotenv').config({ path : '.env' })

// Import de módulos
const express = require('express')
const cors = require('cors')

// Import de rotas
const apiRouts = require('./router/routs')

// Instância do server Express
const server = express()

// Middlewares
server.use(express.json())
server.use(cors({ credentials: true, origin: `${process.env.ORIGIN}${process.env.PORT}`}))

// Rotas
server.use('/', apiRouts)

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta: ${ process.env.PORT }`) 
})
