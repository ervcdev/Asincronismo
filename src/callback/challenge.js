const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//llamado de la api, se coloca API en mayusculas para hacer referencia que es in valor que no va a cambair dentro de los archivos.
const API = "https://api.escuelajs.co/api/v1";

//funcion que recive la url y el callback, para recivir la solicitud de la api
function fecthData(urlApi, callback) {
  //url de app, el callback recibe la informacion de los elementos, o el error de
  let xhttp = new XMLHttpRequest(); //realiza la solicitud

  //trabajar con xhttp,el open es para abrir la conexion,(obtener, la url que utilizara, habilitar la api)
  xhttp.open("GET", urlApi, true);
  //onreadystatechange es para escuchar el estado de la solicitud y saber cuando esta disponible la informacion
  xhttp.onreadystatechange = function (event) {
    //event es para detectar cambios en el codigo.
    //validar estado en el que se encuentra
    if (xhttp.readyState === 4) {
      //validar el mismo tipo de valor y dato
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText)); // dentro de xhttp.responseTextx recive las peticiones del sevidor
      } else {
        const error = new Error("Error" + urlApi); //saber en que elemento en particual fue el error de la api
        return callback(error, null); //retorno del valor y null si no devuelve el dato
      }
    }
  };
  xhttp.send(); //ejecucion de la logica
}

fecthData(`${API}/products`, function (error1, data1) {
  //api y peticion, funcion anonima
  //validar que si hay un error detenga toda ejecucion
  if (error1) return console.error(error1); //devuelve el error que encuentre
  //si la peticion es correcta llamara al producto
  //paso de parametros y funcion que es callback, en el data1 recibe el valor
  fecthData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    //llamado de los elementos
    //validacion del error2
    if (error2) return console.error(error2);
    //anidar otro llamado para obtener la informacion de data2
    fecthData(
      `${API}/categories/${data2?.category?.id}`,
      function (error3, data3) {
        //llamado de la categoria
        if (error3) return console.error(error3);
        console.log('data1----------------------------');
        console.log(data1[0]);
        console.log('data2---------------------------');
        console.log(data2.title);
        console.log('data3----------------------------');
        console.log(data3.name);
      }
    );
  });
});


