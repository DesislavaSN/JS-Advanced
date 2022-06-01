// 5. Smallest Two Numbers

function smallest2Nums(arr){
    let res = arr.sort((a,b) => a-b).slice(0,2);
    console.log(res.join(' '));
}

smallest2Nums([30, 15, 50, 5]);
smallest2Nums([3, 0, 10, 4, 7, 3]);
