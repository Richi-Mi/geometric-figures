// Modules 
const express = require('express')
const path = require('path')
const router = require('./routers/routers')
const app = express()

//routers Usamos las rutas para crear paginas
app.use(router)

// --- Static Aqui usamos los archivos css y javascript
app.use(express.static(path.join(__dirname, 'public')))

// -- Port Lanzamos el servidor 
app.listen(3000, () => {
    console.log(`Server on port 3000`)
})