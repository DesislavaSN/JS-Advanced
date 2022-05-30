/* The second parameter will be either "Camel Case" or "Pascal Case".
In case of different input, your output should be "Error!"  */
 
function solve(text, convertor) {
 
  text = document.getElementById('text').value;
  convertor = document.getElementById('naming-convention').value;
  let outputField = document.getElementById('result');
  let result = '';
  const arrText = text.split(' ');
 
  if (convertor == 'Camel Case') {
    // outputField.textContent = 'true';
    for(let i = 1; i < arrText.length; i++){
      const firstCapitalLeter = arrText[i][0].toUpperCase();
      // console.log(firstCapitalLeter);
      result += firstCapitalLeter;
      for (let k = 1; k < arrText[i].length; k++) {
        const smallLetters = arrText[i][k].toLowerCase();
        // console.log(smallLetters);
        result += smallLetters;
      }
    }
    // console.log(arrText[0]);
    outputField.textContent = arrText[0].toLowerCase() + result;
  } else if (convertor == 'Pascal Case'){
    // outputField.textContent = 'true too';
    for(let i = 0; i < arrText.length; i++){
      const firstCapitalLetter = arrText[i][0].toUpperCase();
      result += firstCapitalLetter;
      for(k = 1; k < arrText[i].length; k++){
        const smallLetters = arrText[i][k].toLowerCase();
        result += smallLetters;
      }
    }
    // console.log(result);
    outputField.textContent = result;
  } else {
    outputField.textContent = 'Error!';
  }
}
 
 
// trqbva da si opravq koda s otdelni functions za came case i pascal case!
// function solve(text, convertor) {
 
//   text = document.getElementById('text').value;
//   convertor = document.getElementById('naming-convention').value;
//   let outputField = document.getElementById('result');
//   let result = '';
//   const arrText = text.split(' ');
 
//   if (convertor == 'Camel Case') {
//     // outputField.textContent = 'true';
//     for(let i = 1; i < arrText.length; i++){
//       const firstCapitalLeter = arrText[i][0].toUpperCase();
//       // console.log(firstCapitalLeter);
//       result += firstCapitalLeter;
//       for (let k = 1; k < arrText[i].length; k++) {
//         const smallLetters = arrText[i][k].toLowerCase();
//         // console.log(smallLetters);
//         result += smallLetters;
//       }
//     }
//     // console.log(arrText[0]);
//     outputField.textContent = arrText[0].toLowerCase() + result;
//   } else if (convertor == 'Pascal Case'){
//     // outputField.textContent = 'true too';
//     for(let i = 0; i < arrText.length; i++){
//       const firstCapitalLetter = arrText[i][0].toUpperCase();
//       result += firstCapitalLetter;
//       for(k = 1; k < arrText[i].length; k++){
//         const smallLetters = arrText[i][k].toLowerCase();
//         result += smallLetters;
//       }
//     }
//     // console.log(result);
//     outputField.textContent = result;
//   } else {
//     outputField.textContent = 'Error!';
//   }
// }