const lista1 = [
    450000,
    200,
    500,
    900,
    200,
    600, 
    300, 
    100,
    400,
];
lista1.sort(function(a,b){return a-b});
const mitadLista1 = parseInt(lista1.length/2);
function esPar (numero){
    if (numero%2 === 0)
        return true;
    else
        return false;
}

let mediana; 

if (esPar(lista1.length)){
    const elemento1=lista1[mitadLista1-1];
    const elemento2=lista1[mitadLista1];
    mediana = (elemento1+elemento2)/2;
} else {
    mediana = lista1[mitadLista1];
}