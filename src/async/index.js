//creando una promesa validar que sea correcta y luego haciendo el llamado de esta para ser utilizada
//Promesa
const fnAsync = () => {
    //con resolve y reject vamos a manejar el flujo
    return new Promise((resolve, reject) => {
        //validacion para que regrese el result un string
        (true)
          ? setTimeout(() => resolve('Async!!!'), 2000) //recive la funcion anonima de resolve, demora 2 segundos
          : reject(new Error('Error!!')) //cuando no se cumpla la condicion lanzara el error
    }) 
}

//utilizando el concepto de asinc
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("Holle!");
}

console.log('before');
anotherFn();
console.log("After");





/* 
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
          ? setTimeout(() => resolve('Async!!!'), 2000) 
          : reject(new Error('Error!!')) 
    }) 
}

 */ 


    