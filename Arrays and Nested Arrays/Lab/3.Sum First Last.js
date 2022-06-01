// 3.	Sum First Last

function sumFirstAndLast(arr){

    let el1 = Number(arr[0]);
    let elLast = Number(arr[arr.length - 1]);
    let sum = el1 + elLast;
    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);
