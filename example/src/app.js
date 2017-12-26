const express = require('express')
const routeLoader = require('../../index')

const app = express()
routeLoader(app)

module.exports = app
