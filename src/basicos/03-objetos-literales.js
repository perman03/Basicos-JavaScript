console.log('OBJETOS LITERALES'); 

const persona = {
    nombre: 'Bruce', 
    apellido: 'Banner', 
    edad: 38,
    direccion: {
        ciudad: 'New York', 
        zip: '212121',
    }

}

// console.table(persona); //PODEMOS IMPRIMIR UN OBJETO EN FORMA DE TABLA
console.log(persona);     //IMPRESION DEL OBJETO

/*  ¿QUE SUCEDE SI QUEREMOS COPIAR UN OBJETO  

    Para copiar las propiedades de un objeto debemos 
    utilizar el operador spread {...}.
    Si lo hacemos de la siguiente forma:

    conts persona2 = persona; 
    
    solo estamos copiando su posición en memoria del
    primer objeto. Si queremos modificar algun dato
    del nuevo objeto (persona2), se modificará en 
    el primer objeto y eso resultará un falso positivo


    La forma correcta es la siguiente:


*/

const persona2 = {...persona};  //copiamos el objeto (sus propiedades)
persona2.nombre = 'Tony';      //modificamos el valor de 'nombre'

console.log(persona2); 




