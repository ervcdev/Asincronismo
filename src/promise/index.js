//construccion de la promesa, regresa una funcion con 2 funciones adentro

const promise = new Promise(function (resolve, reject) {
    //va a llamar resolve y mostrar la informacion del usuario o hacer una validadcion para ver si hay algun error
    resolve('Hey!')
}) ;

//ver la cantidad de vacas y dependiendo de la cantidad ver si puede ordeñar y ver si sale la cantidad de litros requeridos
const cows  =  "hol";

//creacion de la promesa
const countCows = new Promise(function (resolve, reject){
    if(cows > 10){
        resolve(`ww have ${cows}, cows on the farm `)
    }else {
        reject("There is no cows")
    }
})

//Entregaria un result para ver cuantas vacas o reject ya que no habria la cantidad de vacas

//El método then() se utiliza para manejar el resultado exitoso de una promesa y tomar acciones en función de ese resultado.

//resolve y reject son dos funciones que se utilizan para resolver o rechazar una promesa en JavaScript.
countCows.then((result) => {
    console.log(result); //devuelve el resultado
}).catch((error) => {
    console.log(error);  //devuelve el error encontrado
}).finally(() => console.log('Finally')); //caundo ya termino sin importar el resultado
 





 






