// 8.	Juice Flavors

function juiceFlavors(arr) {
  const juices = {};
  const bottles = {};

  for (const el of arr) {
    let [flavour, qty] = el.split(" => ");
    qty = Number(qty);

    if (!juices.hasOwnProperty(flavour)) {
        juices[flavour] = 0;
    }
    juices[flavour] += qty;
    
    if (juices[flavour] >= 1000) {
      if (!bottles.hasOwnProperty(flavour)) {
        bottles[flavour] = 0;
      }
      let bottleOfJuice = Math.floor(juices[flavour] / 1000);
      bottles[flavour] += bottleOfJuice;
      juices[flavour] -= (bottleOfJuice * 1000);
      // console.log(bottleOfJuice);
    }
  }

  // console.log(juices, 'juices');
  // console.log(bottles, 'bottles');
  for (const juice in bottles) {
    console.log(`${juice} => ${bottles[juice]}`);
  }
}

juiceFlavors([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);

console.log('-------');

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)

// const allJucies = new Map();
// const bottlesOfJuice = new Map();

// for (const el of arr) {
//     let [typeJ, qty] = el.split(' => ');
//     // console.log(typeJ, qty);

//     if (allJucies.has(typeJ)) {
//         let currQty = allJucies.set(typeJ) + Number(qty);
//         allJucies.set(typeJ, currQty);
//     } else {
//         allJucies.set(typeJ, Number(qty))
//     }

//     if (allJucies.get(typeJ) / 1000 >= 1) {
//         console.log(typeJ);
//         let bottle = Math.floor(allJucies.get(typeJ) / 1000);

//     }

// }
// console.log(allJucies);
