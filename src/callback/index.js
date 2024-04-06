//`callbacks
function sum(num1, num2) {
    return num1 + num2;
}

// se estan pasando en los parametros 1 en num1, 2 en num2 y la funcion sum en el parametro callback
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(1, 2, sum));

//setTImeOut
//ejecutar codigo en un tiempo determinado, que defina

//recibe una funcion, el tiempo y argumentos que vallamos a necesitar

setTimeout(function () {
    console.log('Hola javascript');
},10000);


function gretting(name) {
    console.log(`Hola desde funcion ${name}`);
}

setTimeout(gretting, 2000, 'Ervin')




