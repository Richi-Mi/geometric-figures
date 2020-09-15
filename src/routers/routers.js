const { mediumpurple, mediumblue } = require('color-name')
const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const path = require('path')
const dirFile = path.join(`${__dirname}/../views/`)

router.get('/', (require, response) => {
    response.sendFile(`${dirFile}index.html`)
})
router.get('/Figuras', (require, response) => {
    response.sendFile(`${dirFile}figuras.html`)
})
router.get('/Areas-y-perimetros', (require, response) => {
    response.sendFile(`${dirFile}Areas.html`)
})
router.get('/contact', (require, response) => {
    response.sendFile(`${dirFile}contact.html`)
})
router.get('/about', (request, response) => {
    response.sendFile(`${dirFile}about.html`)
})
module.exports = router