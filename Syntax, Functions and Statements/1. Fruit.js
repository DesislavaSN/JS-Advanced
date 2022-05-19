// 1. Fruit

function fruitShopping(fruit, weightGr, priceKg){
    let weightKg = weightGr / 1000;
    let money = weightKg * priceKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

fruitShopping('orange', 2500, 1.80);
fruitShopping('apple', 1563, 2.35);