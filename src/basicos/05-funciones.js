console.log('FUNCIONES'); 

//FUNCION SIMPLE DE SALUDO
const saludo = function(nombre){
    return `Hola, ${nombre}`; 
}

//FUNCION DE FLECHA
const saludo2 = (nombre) => {
    return `Hola, ${nombre}`; 
}

//FUNCION DE FLECHA SIMPLIFICADA (SE DA POR IMPLICITA EL RETURN)
const saludo3 = (nombre) => `Hola, ${nombre}`; 

console.log(saludo('Juan')); 
console.log(saludo2('Frank'));
console.log(saludo2('Franco')); 


//RETURN A UN OBJETO DENTRO DE UNA FUNCION FLECHA

const getUser = () => ({
    uid: '123455',
    username: 'chupapi_muñaño',
}); 

const usuario = getUser; 
console.log(usuario)

/* TAREA : 
    1.- TRANFORMAR A UNA FUNCION FLECHA
    2.- TIENE QUE RETORNAR UN OBJETO IMPLICITIO
    3.- PRUEBAS

*/


//FUNCION NORMAL
// function getUsuarioActivo( nombre ){
//     return{
//         uid: 'ABC1234',
//         username: nombre,
//     }
// }; 



//FUNCION FLECHA
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123', 
    username: nombre,
}); 

const usuarioActivo = getUsuarioActivo('Franco'); 
console.log(usuarioActivo); 
