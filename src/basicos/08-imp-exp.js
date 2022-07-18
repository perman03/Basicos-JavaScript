//IMPORT, EXPORT Y FUNCIONES COMUNES DE ARREGLOS

//importamos el arreglo de 'heroes'
import heroes, {owners} from '../data/heroes'   //heroes es el export por default (sin llaves) y owners es la export individual, lleva llaves

// console.log(heroes); //imprime el arreglo
// console.log(owners); //imprime las compañias 


//FIND
export const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id); //heroe = callback
}

// console.log(getHeroeById(2)); //imprime el heroe con el ID 2 (spiderman)



//FILTER
export const getHeroeByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner); 
}

// console.log(getHeroeByOwner('DC'));  //imprime todos los heroes de DC



