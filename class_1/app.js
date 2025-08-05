const express = require("express"); //importación de libreria
const app = express(); //crear una instancia
const port = 3000; //Puerto donde se ejecuta

//Middleware para parsear JSON
app.use(express.json());

//Primer ruta para aplicación
//Ruta metodo GET para saludo, ruta principal, ejecuta un metódo

app.get("/", (req, res) => {
    console.log("Accedieron a esta ruta");
    res.send("Hola desde tu api"); //Respuesta del end point raiz
})


app.get("/tienda", (req, res) => {
    console.log("Accedieron a la ruta tienda");
    res.send("Bienvenido a mi negocio");
})


app.listen(port, () => {
    console.log(`El servidor se esta escuchando en http://localhost:${port}`); //Mensaje de inicio del servidor
})
