// 7.  Sorting Numbers

// - sort b-a; pop() smallest num, shift() biggest num & push every num.
 
function sortingNums(arr){
    let newArr = [];
    arr.sort((a,b) => b-a);
    // console.log(arr);
    while(arr.length !== 0){
        newArr.push(arr.pop());
        newArr.push(arr.shift());
    }
    return newArr;
}
 
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); 
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
 
 
// function sortingNums(arr){
//     const newArr = [];
//     arr.sort((a,b) => a-b);
//     // console.log(arr);
 
//     for(let i = 0; i <arr.length; i++){
//         let smallN = arr.shift();
//         // console.log(smallN);
//         newArr.push(smallN);
//         let bigN = arr.pop();
//         // console.log(bigN);
//         newArr.push(bigN);
//         if (arr.length <= 2) {
//             for (let el of arr) {
//                 newArr.push(el);
//             }
//         }
//     }
//     return newArr;
// }
 