// FETCH API

const apiKey = 'BTCgOqux5XQ62lQ5wyRKNawHM0UhAFaC'; 

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); 


//promesas anidadas o en cadena
peticion
 .then (resp => resp.json())
 .then (({data}) => {                              //extraccion por medio de desestructuracion de url de imagen
    const {url} = data.images.original; 

    const img = document.createElement('img');    //creamos un elemento imagen HTML
    img.src = url;                                //asignamos la url como el recurso de la imagen 

    document.body.append(img);                   //colocamos la imagen en el HTML
})  
.catch(console.warn); 