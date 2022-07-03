function calcularMediaAritmetica (list){
    const sumList = list.reduce( function (sum=0,newItem){ return sum+newItem; } );
    return sumList/list.length;
}function calcularMediana (list){
    list.sort(function(a,b){ return a-b; });
    const middleList = parseInt(list.length/2);
    function esPar (num){ return (num%2 === 0); }
    let mediana;
    (esPar(list.length))?(mediana = (calcularMediaAritmetica([list[middleList-1],list[middleList]]))):(mediana = list[middleList]);
    return mediana;
}
