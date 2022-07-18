// PROMESAS

//importamos del ejercicio numero 8 el getHeroById
import {getHeroeById} from "./basicos/08-imp-exp";

// const promesa = new Promise((resolve, reject) =>{

//     setTimeout( ()=>{
//         // resolve();
//         const p1 = getHeroeById(2); 
//         resolve(p1); 
//     }, 2000 )

// });

// promesa.then((heroe)=>{
//     console.log('Heroe:', heroe); 
// })
// .catch(error=>console.warn(error)); 


const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) =>{

        setTimeout( ()=>{
            const p1 = getHeroeById(id); 
            if(p1){                        //condicional para validar si el heroe existe
                resolve(p1); 
            } else{                       //si no existe, se envia el reject (catch)
                reject('No se encontró al heroe'); 
            }
        }, 2000 )
    
    });

}

 //forma simplicada
getHeroByIdAsync(1)
    .then(console.log)               
    .catch(console.warn); 

//forma extendida
// getHeroByIdAsync(4)
//     .then(heroe => console.log('heroe', heroe))               
//     .catch(error => console.warn(error)); 
