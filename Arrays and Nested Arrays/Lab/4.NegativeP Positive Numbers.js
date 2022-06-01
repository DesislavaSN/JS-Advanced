// 4.	Negative / Positive Numbers

function negativePositiveNums(arr){

    let newArr = [];
    for (let el of arr) {
        if (el >= 0) {
            newArr.push(el);
        } else {
            newArr.unshift(el);
        }
    }

    for (let el of newArr) {
        console.log(el);
    }
}

negativePositiveNums([7, -2, 8, 9]);
console.log("----");
negativePositiveNums([3, -2, 0, -1]);
