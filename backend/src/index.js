import AuthController from './app/controller/auth.controller'
import FanController from './app/controller/fan.controller'
import FireController from './app/controller/fire.controller'

const express = require('express')
const app = express()
const dotenv = require('dotenv')
const port = 5003

dotenv.config()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`))