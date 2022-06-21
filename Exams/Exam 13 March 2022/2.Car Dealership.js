class CarDealership {
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar (model, horsepower, price, mileage){

        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        const car = {
            model,
            horsepower,
            price,
            mileage
        }
        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar (model, desiredMileage){

        let foundCar = this.availableCars.find(c => c.model == model);
        let foundCarIndex = this.availableCars.findIndex(c => c.model == model)
        // console.log(foundCarIndex);
        let differenceMileage = Math.abs(foundCar.mileage - desiredMileage);
        // console.log(differenceMileage);
        if (foundCar == undefined) {
            throw new Error(`${model} was not found!`);
        } else {
            if (foundCar.mileage <= desiredMileage) {
                // the price stays the same!
                foundCar.price;
            } 
            // ?????? pod vupros e sravnenieto !!
            if (differenceMileage < 40000) {
                //price gets deducted by 5%!
                foundCar.price -= ((5/100) * foundCar.price);
            }
            if (differenceMileage > 40000) {
                //price gets deducted by 10%!
                foundCar.price -= ((10/100) * foundCar.price);
            }

            this.availableCars.splice(foundCarIndex, 1);
            this.soldCars.push({
                model: foundCar.model,
                horsepower: foundCar.horsepower,
                soldPrice: foundCar.price,
            });
            this.totalIncome += foundCar.price;

            return `${model} was sold for ${foundCar.price.toFixed(2)}$`
        }

    }

    currentCar () {

        if (this.availableCars.length == 0) {
            return "There are no available cars";
        } else {
            let res = '-Available cars:';
            let allAvailableCars = this.availableCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`)
            // console.log(allAvailableCars);
            for (const car of allAvailableCars) {
                res += '\n' + car ;
            }
            return res;
        }
        
    }

    salesReport (criteria) {

        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error("Invalid criteria!");
        }

        let sorted = ''
        if (criteria == 'horsepower') {
            sorted = this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
            // console.log(sorted);
        } else if (criteria == 'model') {
            sorted = this.soldCars.sort((a,b) => a.model.localeCompare(b.model));
            // console.log(sorted);
        }

        let res = [];
        res.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        res.push(`-${this.soldCars.length} cars sold:`);
        let allSoldCars = this.soldCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
        // console.log(allSoldCars);
        for (const car of allSoldCars) {
            res.push(car);
        }
        return res.join('\n');
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));
console.log(dealership.salesReport('model'));

/* -SoftAuto has a total income of 29600.00$
-2 cars sold:
---Mercedes C63 - 300 HP - 26100.00$
---Toyota Corolla - 100 HP - 3500.00$
 */
