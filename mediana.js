const lista1 = [
    100,
    200,
    400,
    500,
    300, 
    600, 
    4500,
];
const mitadLista1 = lista1.length/2;
function esPar (numero){
    if (numero%2 === 0)
        return true;
    else
        return false;
}

let mediana; 

if (esPar(lista1.length)){

} else {
    mediana = lista1[mitadLista1];
}