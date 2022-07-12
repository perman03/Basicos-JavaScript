// DESESTRUCTURACION DE OBJETOS
//ASIGNACION DESESTRUCTURANTE 

/*  DOCUMENTACION OFICIAL: 

    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

*/

const persona = {
    nombre: 'Bill', 
    edad: 111, 
    clave: 'Soldier Boy'
}; 

//DESESTRUCTURACION BASICA
// const {nombre, edad, clave} = persona; 

// console.log(nombre);


//DESESTRUCTURACION DESDE FUNCION
const usContext = ({nombre, edad, clave, rango = 'soldado'}) => {    //"soldado" es un valor por defecto de la propiedad 'rango'
    // console.log(nombre, edad, clave, rango); 

    return {
        nombreClave: clave, 
        anios: edad,
        latlang:{
            lat: 14.4544,
            lng: 123455
        }
    }
    

}

const superh = usContext(persona); 
const {nombreClave, anios, latlang: {lat, lng}} = superh; 
console.log(nombreClave, anios, lng, lat); 

//                      CORRECCION:
// const {nombreClave, anios, latlang: {lat, lng}} = usContext(persona); 
// console.log(nombreClave, anios);
// console.log(lat, lng);  


