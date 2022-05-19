// 7.	Cooking by Numbers

function cookingByNums(num, p1, p2, p3, p4, p5){

    num = Number(num);
    let commands = [p1, p2, p3, p4, p5];
    // console.log(commands);

    for(let i = 0; i < commands.length; i++){
        let currCommand = commands[i];
        // console.log(currCommand);
        if (currCommand == 'chop') {
            num /= 2;
            console.log(num);
        } else if(currCommand == 'dice'){
            num = Math.sqrt(num, 2)
            console.log(num);
        } else if(currCommand == 'spice'){
            num += 1;
            console.log(num);
        }else if(currCommand == 'bake'){
            num *=3
            console.log(num);
        }else if(currCommand == 'fillet'){
            num -= (num / 100) * 20;
            console.log(num);
        }
    }
}

cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');



// if (op1 == 'chop' || op1 == 'dice' || op1 == 'spice' || op1 == 'bake' || op1 == 'fillet') {
//     console.log(op1);
    
// }