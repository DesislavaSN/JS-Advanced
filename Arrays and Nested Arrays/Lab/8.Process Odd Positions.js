// 8. Process Odd Positions

function processOddPosition(arr){
    let res = arr.filter((el, i) => i % 2 != 0)
    .map(el => el * 2)
    .reverse()
    .join(' ');

    console.log(res);
}

processOddPosition([10, 15, 20, 25]);
processOddPosition([3, 0, 10, 4, 7, 3]);

// 2nd option:
// function processOddPosition(arr){

//     let newArr = [];
//     for(let i = 1; i < arr.length; i+=2){
//         newArr.push(arr[i] * 2);
//     }

//     console.log(newArr.reverse().join(' '));
// }