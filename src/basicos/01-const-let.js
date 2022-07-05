//TEMA 1.- VARIABLES Y CONSTANTES

//Ya no se trabaja con var, solo con let y Const

//las constantes no pueden cambiar su valor
const nombre = 'Franco';
const apellido = 'Pérez';

//Los let si pueden cambiar su valor
let valorMoneda = 2; 
valorMoneda = 5;     //Se puede cambiar el valor de la variable

console.log( nombre, apellido, valorMoneda); 
//EN LA CONSOLA NOS ENTREGARÁ EL NOMBRE COMPLETO Y EL VALOR 5, PUES CAMBIAMOS EL VALOR DE LET (VALOR MONEDA) A 5.

if(true){
    const nombre = 'Juanito';
    const apellido = 'Bodoque';
    console.log(nombre, apellido); 
}
//A PESAR DE QUE ESTAMOS UTILIZANDO LAS MISMAS VARIABLES, NO EXISTE NINGUN ERROR, PUES SON LAS VARIABLES DE ESE SCOPE

valorMoneda = 9;     
console.log(valorMoneda); 