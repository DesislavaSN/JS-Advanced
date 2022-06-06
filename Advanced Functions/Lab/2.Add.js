//2.	Add 
//A function that keeps a number inside its context and returns a new function that adds a given number to the previous one.

function solution(a){
    return (b) => {
        return a + b;
    }
}

let add5 = solution(5);
console.log(add5(2)); //7
console.log(add5(3)); //8
console.log('---');
let add7 = solution(7);
console.log(add7(2)); //9
console.log(add7(3)); //10

