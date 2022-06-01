// 2.  Print every N-th Element from an Array

function everyNthEl(arr, stepNum) {
 
    return arr.filter((x,i)=> {
        // console.log(i % stepNum == 0); // vrushta true or false
        i % stepNum == 0;
    });
}
 
// function everyNthEl(arr, stepNum) {
//     let newArr = [];
//     for(let i = 0; i< arr.length; i+=stepNum){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
 
console.log(everyNthEl(["5", "20", "31", "4", "20"], 2));
console.log('---');
console.log(everyNthEl(["dsa", "asd", "test", "tset"], 2));
console.log('---');
console.log(everyNthEl(["1", "2", "3", "4", "5"], 6));
 