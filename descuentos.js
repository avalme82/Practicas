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
const coupons = [
    "Avalme_es_Batman",
    "pero_no_le_digan_a_nadie",
    "es_un_secreto",
];