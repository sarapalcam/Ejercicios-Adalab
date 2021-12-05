"use strict"

/*const pearsBasket = {
    maxNumber: 10,
    minNumber: 0,
    currentNumber: 3,
    initNumber: 1,
    addPear: () => {
        if (pearsBasket.currentNumber < pearsBasket.maxNumber) {
           return pearsBasket.currentNumber += 1;
        } else {
            console.log("Ya no puedes añadir más peras a tu cesta, has llegado al máximo");
        }
    },
    removePear: () => {
        if (pearsBasket.currentNumber > pearsBasket.minNumber) {
            return pearsBasket.currentNumber -= 1;
        } else {
            console.log("Ya no puedes eliminar más peras de tu cesta, has llegado al mínimo");
        }
    },
    resetBasket: () => {
        return pearsBasket.currentNumber = pearsBasket.initNumber;
    }
}*/

const pearsBasket = {
    maxNumber: 10,
    minNumber: 0,
    currentNumber: 3,
    initNumber: 1,
    addPear: function() {
        if (this.currentNumber < this.maxNumber) {
           return this.currentNumber += 1;
        } else {
            console.log("Ya no puedes añadir más peras a tu cesta, has llegado al máximo");
        }
    },
    removePear: function() {
        if (this.currentNumber > this.minNumber) {
            return this.currentNumber -= 1;
        } else {
            console.log("Ya no puedes eliminar más peras de tu cesta, has llegado al mínimo");
        }
    },
    resetBasket: function() {
        return this.currentNumber = this.initNumber;
    }
}