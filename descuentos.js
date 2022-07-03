function calcularPrecioConDescuento(precio, descuento){
    return ((precio*(100 - descuento))/100);
}
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son: $"+calcularPrecioConDescuento(priceValue,discountValue);
}