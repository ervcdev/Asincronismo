//enviar datos a la API
import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

//agregar  informacion
//se pasa la url de api y los datos que trae
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        //objeto que va a tener la configuracion necesaria que va a ser el metodo que va a enviar
        method: 'POST',
        mode: 'cors',  //permisos que va a tener
        
        //que si no hay ninguna autenticación no pasa nada
        credentials: 'same-origin', //que si nosotros no lo asignamos, no tendra ningun incoveniente
        //cabezeras que se van a enviar en la solicitud
        headers: {
            'Content-Type': 'application/json',//es para decirle que el valor que se envia en se aplicacion json
        },
        //INformacion que quiero pasarle
        body:JSON.stringify(data) //pasar la informacion como texto
    });
    return response;
}

const data = {
    "title": "New productico",
    "price": 6456,
    "description": "probando como funciona",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  //pasando la url conde se van enviar los archivos, y en la data es la informacion a enviar
postData(`${API}/products`, data)
  .then(response => response.json()) //Transfomar la informacion en un json
  .then(data => console.log(data)) //imprimir el objeto


 