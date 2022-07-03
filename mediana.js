function calcularMediana (list){
    list.sort(function(a,b){ return a-b; });
    const middleList = parseInt(list.length/2);
    function esPar (num){ return (num%2 === 0); }
    let mediana;
    (esPar(list.length))?(mediana = (list[middleList-1]+list[middleList])/2):(mediana = list[middleList]);
    return mediana;
}