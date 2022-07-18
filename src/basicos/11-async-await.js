// ASYNC - AWAIT
//ASYNC ES UNA FORMA MUCHO MAS SENCILLA DE REALIZAR UNA PROMESA. UN AWAIT NO FUNCIONA SI NO HAY UN ASYNC


//PROMESA REALIZADA DE FORMA CLASICA
// const getImagenPromesa = () => new Promise(resolve => resolve('https://media0.giphy.com/media/87gRsodLAy7wQZBd6y/giphy.gif?cid=33161a6cbb3e6dc97308b293b5b68f799af63de3176645af&rid=giphy.gif&ct=g'))
// getImagenPromesa().then(console.log); 


//PROMESA REALIZADA CON ASYNC - AWAIT
const getImagen = async() => {

    try {

        const apiKey = 'BTCgOqux5XQ62lQ5wyRKNawHM0UhAFaC'; 
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); 
        const data = await respuesta.json()
            .then (({data}) => {                         
            const {url} = data.images.original; 
            const img = document.createElement('img');    //creamos un elemento imagen HTML
            img.src = url;                                //asignamos la url como el recurso de la imagen 
            document.body.append(img);                   //colocamos la imagen en el HTML
        })
        
    } catch (error) {
        //manejo de los errores
        console.error(error); 
    }

   

}

getImagen(); 





