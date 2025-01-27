const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/Sigma";
mongoose.connect(url)
    /*, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
*/
.then( () => {
    console.log("Conectado!!!")
})
.catch( (error) => {
    console.log("Error al conectar: "+error);
})
//Para que funcione eliminamos del package.json: 
/*
  "type": "module",
  */
//export default mongoose;