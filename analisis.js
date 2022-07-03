const salariosCol = colombia.map( function(persona){ return persona.salary; });

const salariosColSorted = salariosCol.sort(function(salaryA, salaryB){ return salaryA - salaryB; });

function esPar(numero){ return (numero%2 === 0); }

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if (esPar(lista.length)){
        const personamitad1 = lista[mitad-1];
        const personamitad2 = lista[mitad];
        return ((personamitad1+personamitad2)/2);
    }
    else {
        return personamitad = lista[mitad];
    }
}