const salariosCol = colombia.map( function(persona){ return persona.salary; });

const salariosColSorted = salariosCol.sort(function(salaryA, salaryB){ return salaryA - salaryB; });

function esPar(numero){ return (numero%2 === 0); }
function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce( function (acumulado = 0, nuevo){ return acumulado + nuevo; } );
    return sumaLista/lista.length;
}
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    let middle;
    (esPar(lista.length))?(middle = (calcularMediaAritmetica([lista[mitad-1],lista[mitad]]))):(middle = personamitad = lista[mitad]);
    return middle;
}
