const express = require('express')
const app = express()
const PORT = 3000

let data = [{name:'ana'},{name:'juan'},{name:'maria'}]

app.use(express.json())


app.get( '/', (req, res) => {

    res.send('bienvenido a mi app')
})

app.get( '/users', (req, res) => {

    res.send(data)
})


// METODOS HTTP

app.post( '/users', (req, res) => {
    console.log('peticion POST con body');
    data.push (req.body)
    res.send('datos guardados correctamentee')

})

app.put( '/users/:id', (req, res) => {

    const id = req.params.id
    data[id] = req.body
    res.send('datos modificados correctamente')
})

app.delete( '/users/:id', (req, res) => {

   const id = req.params.id
   data.splice(id,1)
   res.send('datos eliminados correctamente')
})

app.patch('/users/:id', (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    Object.assign(data[id], newData);
    res.send('Datos actualizados correctamente');
});


app.listen(PORT, () => {
    console.log('la app corriendo en el puerto: ' + PORT)
})

