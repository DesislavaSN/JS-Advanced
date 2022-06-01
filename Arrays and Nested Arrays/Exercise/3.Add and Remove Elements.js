// 3. Add and Remove Elements

function addAndRemoveEl(input) {
    let initialNum = 0;
    const newArr = [];
 
    for(let i = 0; i < input.length; i++){
        initialNum += 1;
        // console.log(initialNum);
        if (input[i] == 'add') {
            newArr.push(initialNum);
        } else {
            newArr.pop();
        }  
    }
 
    // console.log(newArr);
    if (newArr.length > 0) {
        console.log(newArr.join('\n'));
    } else {
        console.log('Empty');
    }
}
 
addAndRemoveEl(["add", "add", "add", "add"]);
console.log('---');
addAndRemoveEl(["add", "add", "remove", "add", "add"]);
console.log('---');
addAndRemoveEl(["remove", "remove", "remove"]);