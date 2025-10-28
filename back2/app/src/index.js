import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.routes.js';


const app = express ();

const PORT=3000


//settings aqui iran las configuraciones 
//(a preguntar por mongodb conect)
const connectDb= async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
        console.log ('conexion exitosa');
    } catch(error){
        console.log ('error de conexion');
    }
}

//middelwares Son una funcion que permite que se comunique diferentes partes del codigo hay tanto externas como internas ,
//EJEMPLO de ahora usamos "express.json " una funcion que nos permite poder recibir y convertir a json , sino nos daria un undifined, lo que nos ayudara a hacer una API
// aqui esta a nivel aplicacion

app.use(express.json())
//Ejemplo de middelware que va a mostar la fecha
//aqui el middelware procesa la info y le pasa la "responsabilidad" a la siguiente middleware o ruta, aqui se usa "next"para directamente mostrar , si no se usa , la siguiente funcion no mostrara su resultado
const midDate=(req,res,next)=>{
    console.log(`Este middleware mustrea la fecha ${new Date(). toLocaleDateString()}`
);
next();

};
// los Middelwares deben ser llamados antes de las rutas finales donde vas a tener las respuesta
// si se nesecita , se mete dentro de un array ambos con [] y se ejecutan en el orden correcto.
// routes 
// podemos encontrar una ruta armada en el archivo , usamos el metodo "get , el cual recibe un string con el url del cual estamos apuntando,este seria la raiz del sitio donde ira el index , como SEGUNDO parametro recibira una funcion con "req y res" aunque solo haya una respuesta siempre va res"
app.get('/',midDate,(req,res)=>{
res.send( "back2"); } );

//
app.use('/api/users',userRoutes)
//middelware de manejo de errores , va siempre al final asi evitar errores 
app.use( (req,res,next)=>{
    res.status(404).send ("not found")
})



//listeners son para poner los puertos y extars
connectDb()
app.listen(PORT,()=>{
    console.log(`Server on port ${PORT    }`)
} )

// A BUSCAR
//buscar funcion de orden superior
//buscar Variable de entorno