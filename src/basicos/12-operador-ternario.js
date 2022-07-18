//OPERADOR CONDICIONAL TERNARIO: MANERA CORTA DE REALIZAR UNA DECISION

const activo = true;
// let mensaje = ''; 

//condicional clasico

// if(activo){
//     mensaje = 'Activo'; 
// }else{
//     mensaje = 'inactivo'; 
// }

//OPERADOR CONDICIONAL TERNARIO

// const mensaje = (activo) ? 'Activo' : 'Inactivo'; 
const mensaje = (activo === true) && 'Activo'; 

console.log(mensaje); 