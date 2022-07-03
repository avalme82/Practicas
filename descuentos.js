const coupons = [
    {   name: "Avalme_es_Batman", discount: 15,   },
    {   name: "pero_no_le_digan_a_nadie", discount: 30,   },
    {   name: "es_un_secreto", discount: 20,   },
];
function calcularPrecioConDescuento(precio, descuento){
    return ((precio*(100 - descuento))/100);
}
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;
    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue;
    }
    const userCoupon =coupons.find(isCouponValueValid);
    if (!userCoupon){
        alert("El cupón "+couponValue+" no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = "El precio con descuento son: $"+precioConDescuento;
        }
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son: $"+calcularPrecioConDescuento(priceValue,descuento);
}
