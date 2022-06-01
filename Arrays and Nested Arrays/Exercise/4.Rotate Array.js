// 4.   Rotate Array

function rotateArr(arr, rotation) {
    for(let i = 0; i < rotation; i++){
        let movedItem = arr.pop();
        arr.unshift(movedItem);
 
        // s edin red dvete operacii otgore:
        // arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
 
// rotations -> 100 000  ??? za domashno: 100 000 % arr.length == 0
rotateArr(["1", "2", "3", "4"], 2); // 3 4 1 2
// console.log('---');
rotateArr(["1 Banana", "2 Orange", "3 Coconut", "4 Apple"], 15); // Orange Coconut Apple Banana