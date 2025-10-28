// aqui la idea es determinar el como se guarda la informacion en la base de datos
import {Schema,model} from 'mongoose'

const UserSchema = new Schema({
    name:{
         type : String,
        required: true,
    },
     last_name:{
         type : String,
        required: true,
    },
     email:{
         type : String,
        required: true,
        unique:true,
    },
    
});


export default model("User",UserSchema)
