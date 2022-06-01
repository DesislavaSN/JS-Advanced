// 6. Bigger Half

function biggerHalf(arr){
    let sorted = arr.sort((a,b) => a-b);
    // console.log(sorted);
    let halfArr = Math.floor(arr.length /2);
    // console.log(Math.ceil(halfArr));
    let res = arr.slice(halfArr);
    console.log(res);
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
biggerHalf([3,39, 14, 7, 2, 25, 6, 111, 222]);

