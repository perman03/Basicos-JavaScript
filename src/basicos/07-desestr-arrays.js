//DESESTRUCTURACION DE ARREGLOS

const theBoys = ['Butcher', 'Huguie', 'Frenchie', 'LM', 'Kimiko', 'Annie']; 

//desestructuracion basica: imprime alguno de los nombre de los personajes
const [,p2,p3] = theBoys; 
console.log(p2, p3); 

const retornaArreglo = () =>{
    return ['ABC', 1234]; 
}

//Todo es por posiciones: 'letras' tiene la posicion 0 (ABC) y 'numeros' tiene la posicion 1 (1234)
const [letras, numeros] = retornaArreglo(); 
console.log(letras, numeros); 

//TAREA
//1.- El primer valor del arreglo se llamara 'nombre'
// 2.- El segundo valor se llamara setNombre

const usState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo'); 
    }]
}

//desestructuramos...
const [nombre, setNombre] = usState('Butcher'); 
console.log(nombre); 
setNombre(); 
