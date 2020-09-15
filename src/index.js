// Modules 
const express = require('express')
const path = require('path')
const router = require('./routers/routers')
const app = express()

//routers
app.use(router)

// --- Static Aqui usamos los archivos css y javascript
app.use(express.static(path.join(__dirname, 'public')))

// -- Port 
app.listen(8080, () => {
    console.log(`Server on port 8080`)
})