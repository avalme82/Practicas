function calcularModa (list1){
    const count = {};
    list1.map(function (item){ (count[item])?(count[item] += 1):(count[item] = 1)})
    const listArray = Object.entries(count).sort(function (a,b){ return a[1] - b[1];})
    return listArray[listArray.length - 1];
}