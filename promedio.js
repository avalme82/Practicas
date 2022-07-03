function calcularPromedio (lista){
    const sumaLista = lista.reduce( function (acumulado = 0, nuevo){ return acumulado + nuevo; } );
    return sumaLista/lista.length;
}