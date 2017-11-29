const express = require("express")
const bodyParser = require("body-parser")
const routes = require('./api/routes/')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', routes)

module.exports = app
