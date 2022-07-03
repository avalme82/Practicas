function calcularModa (lista1){
    const count = {};
    lista1.map(function (item){ (count[item])?(count[item] += 1):(count[item] = 1)})
    const lista1Array = Object.entries(count).sort(function (a,b){ return a[1] - b[1];})
    return lista1Array[lista1Array.length - 1];
}