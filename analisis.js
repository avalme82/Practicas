// funciones generales
function esPar(numero){ return (numero%2 === 0); }
function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce( function (acumulado = 0, nuevo){ return acumulado + nuevo; } );
    return sumaLista/lista.length;
}

// Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    let middle;
    (esPar(lista.length))?(middle = (calcularMediaAritmetica([lista[mitad-1],lista[mitad]]))):(middle = personamitad = lista[mitad]);
    return middle;
}

// Mediana General
const salariosCol = colombia.map( function(persona){ return persona.salary; });
const salariosColSorted = salariosCol.sort(function(salaryA, salaryB){ return salaryA - salaryB; });
const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = parseInt((salariosColSorted.length*(90))/100)-1;
const spliceCount = salariosColSorted.length-spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
)