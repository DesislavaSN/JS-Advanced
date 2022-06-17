// 9.	Auto-Engineering Company

function autoEngineeringCompany(arr){

    const cars = {};

    for (const line of arr) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);
        // console.log(carBrand, carModel, producedCars);

        if (!cars.hasOwnProperty(carBrand)) {
            cars[carBrand] = {};
        }
        
        if (!cars[carBrand].hasOwnProperty(carModel)) {
            cars[carBrand][carModel] = 0;
        }
        cars[carBrand][carModel] += Number([producedCars]);
    }

    // console.log(cars);

    for (const car in cars) {
       console.log(`${car}`);
        Object.entries(cars[car]).forEach(brand => {
            console.log(`###${brand[0]} -> ${brand[1]}`);
        })
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)