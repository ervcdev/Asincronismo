import fetch from 'node-fetch';

//llamado de la api, se coloca API en mayusculas para hacer referencia que es in valor que no va a cambair dentro de los archivos.
const API = "https://api.escuelajs.co/api/v1";

// realizar una funcion que va a recivir la url de la api y va a retornar el llamado de fetch
function fecthData(urlApi) {
    return fetch(urlApi);
};
//paso del valor de la API y transformar la url de la api que vamos a llamar
/* fecthData(`${API}/products`)
//utiliza el elemento de then para saber que hay en la respuesta
    .then(response => response.json()) //reaponse es directamente la asignacion alo que vendria siendo .json
    .then(products => { //mostrar para ver que incluye
        console.log(products);
    })
    .then(() => {
        console.log('Holaaaaaaaaaa**************');
    }) 
    .catch(error => console.log(error)); //ver los errores que se presenten
 */



// Realizar multiples llamdos y trae la informacion
fecthData(`${API}/products`)
//se utiliza .then() para transrformar lo que se esta recibiendo del objeto
.then(response => response.json() ) //response es para retornar los productos en json
.then(products => {
    console.log('*********************Mostrando todos los productos **********************');
    console.log(products);
    //retorno del uso de fetchData para llamar ahora la segunda peticion 
    return fecthData(`${API}/products/${products[0].id}`) //traer solo un elemento, se accede al array y luego el id
})
.then(response => response.json())
.then(product => {
    console.log('*************** Mostrar el titulo del primer producto *************'); //titulo del primer producto
    console.log(product.title);
    return fecthData (`${API}/categories/${product.category.id}`)  //trear la categoria que vamos a querer utilizar
})
.then(response => response.json())
.then(category => {
    console.log(category.name);
}).catch(error => console.log(error))
.finally("codigo finalizado")








