function createCalculator() {
    let value = 0;

    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    };
}

// let calc = createCalculator();
// calc.add(5);
// calc.subtract('a');
// console.log(calc.get());
// console.log(calc.add);
// console.log(calc.value);
// console.log(calc.value += 1);
// console.log(typeof calc);

module.exports = { createCalculator };
