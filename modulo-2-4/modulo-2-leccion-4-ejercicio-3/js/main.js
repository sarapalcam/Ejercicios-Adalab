"use strict"

function prices(price){
    const priceIVA = price * .21;
    const totalPrice = price + priceIVA;
    return `Precio sin IVA: ${price}, IVA: ${priceIVA} y Total: ${totalPrice}`;
}

console.log(prices(156));