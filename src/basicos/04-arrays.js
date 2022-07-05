console.log('ARREGLOS'); 

//Un arreglo es una collecion de información que se encuentra en una misma variable

// const arreglo = new Array(100); 

const arreglo = [1, 2, 3, 4]; 
// arreglo.push(1); 
// arreglo.push(2); 
// arreglo.push(3); //es recomendale no utilizar un push porque modifica el arreglo principal

let arreglo2 = [...arreglo, 5];  //con el spread operation copiamos los valores de arreglo y le agregamos el 5 :)


//CREANDO UN NUEVO ARREGLO (Arreglo 3) UTILIZANDO MAP Y CALLBACK. EL OBJETIVO ES OBTENER EL ARREGLO 2 MULTIPLICADO POR 5
 const arreglo3 = arreglo2.map(function(numero){
    return numero * 5; 
 }); 

console.log(arreglo);  //[1, 2, 3, 4]
console.log(arreglo2); //[1, 2, 3, 4, 5]
console.log(arreglo3); //[5, 10, 15, 20, 25]


