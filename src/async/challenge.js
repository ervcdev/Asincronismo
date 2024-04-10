//llamado de la api
import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

//primero hace los llamados y luego la transformacion de los datos para luego retornar los datos
async function fetchData(urlApi) {
    const response =  await fetch(urlApi); //
    const data = await response.json();
    return data;
}


const anotherFunction = async (urlApi) => {
  try { 
    const products = await fetchData(`${urlApi}/products`); 
    const product = await fetchData(`${urlApi}/products/${products[0].id}`)
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`)

    console.log(products);
    console.log(product.title);
    console.log(category.name);

  }catch (error) { 
    console.error(error);
  }
}


anotherFunction(API)





