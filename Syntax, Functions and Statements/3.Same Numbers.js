// 3.	Same Numbers

function sameNums(num){
    let numAsString = String(num);
    let isSameDig = false;
    
    for(let i = 0; i < numAsString.length; i++){
        let a = numAsString[0];
        let b = numAsString[i];
        // console.log(a);
        // console.log(b);
        if (Number(a) == Number(b)) {
            isSameDig = true;
        } else {
            isSameDig = false;
            break;
        }
    }
    
    if (isSameDig == true) {
        console.log('true');
    } else {
        console.log('false');
    }

    let sum = 0;
    for (let dig of numAsString) {
        sum += Number(dig)
    }
    console.log(sum);
}

sameNums(222222);
sameNums(1234);

