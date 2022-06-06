// //4. Filter Employees
// pomognah si s reshenieto na Zorniza sa filter() method:
function filterEmployees(input, criteria){
    const data = JSON.parse(input);
    const [key, value] = criteria.split('-');

    const res = data.filter(person => person[key] == value);
    for(let i = 0; i < res.length; i++){
        console.log( `${i}. ${res[i].first_name} ${res[i].last_name} - ${res[i].email}` );
    }
}

// --- 
// // moeto opisatelno reshenie - 75 points
// function filterEmployees(input, criteria) {
//   const data = JSON.parse(input);
//   let [keyCriteria, valueCriteria] = criteria.split("-");
//   // console.log(key,  'criteria');

//     const res = [];
//     for (const employee of data) {
//       for (const [key, value] of Object.entries(employee)) {
//           if (keyCriteria == key && valueCriteria == value) {
//               res.push(employee);
//           }
//       }
//     }
//     for(let i = 0; i < res.length; i++){
//         console.log( `${i}. ${res[i].first_name} ${res[i].last_name} - ${res[i].email}` );
//       // console.log(res[i].first_name);
//     }
// }

filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
console.log("---");
filterEmployees(
  `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  "last_name-Johnson"
);
