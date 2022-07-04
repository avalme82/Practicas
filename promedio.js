function calcularMediaAritmetica (list){
    const sumList = list.reduce( function (sum=0,newItem){ return sum+newItem; } );
    return sumList/list.length;
}