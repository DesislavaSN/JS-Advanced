// 5.  Extract Increasing Subsequence from Array

function increasingSubsequence(arr) {
    let res = [];
    let biggest = arr[0];
 
    for(let i = 0; i < arr.length; i++){
        let currNum = arr[i];
        // console.log(currNum);
        if (currNum >= biggest) {
            res.push(currNum);
        }        
    }
    return res;
}
 
// // *** s reduce() - 1vonachalna stoinost -> prazen [] i da pulnim masiva.
// // greshno e:
// function increasingSubsequence(arr) {
//     let res = [];
//     let biggest = arr[0];
//     arr.reduce((prev, current) => {
//         prev < current, biggest;
//         console.log(prev, '<', current);
//         res.push(prev);
//         console.log(res);
//     });
 
//     return res;
// }
 
console.log(increasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])); //[1, 3, 8, 10, 12, 24]
console.log(increasingSubsequence([1, 2, 3, 4])); //[1, 2, 3, 4]
console.log(increasingSubsequence([20, 3, 2, 15, 6, 1])); // [20]
 