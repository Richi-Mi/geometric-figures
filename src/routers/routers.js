const { mediumpurple, mediumblue } = require('color-name')
const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const path = require('path')
const dirFile = path.join(`${__dirname}/../views/`)

router.get('/', (require, response) => {
    response.render(`${dirFile}index.ejs`)
})
router.get('/Figuras', (require, response) => {
    response.render(`${dirFile}figuras.ejs`)
})
router.get('/Areas-y-perimetros', (require, response) => {
    response.render(`${dirFile}Areas.ejs`)
})
router.get('/about', (request, response) => {
    response.render(`${dirFile}about.ejs`)
})
module.exports = router