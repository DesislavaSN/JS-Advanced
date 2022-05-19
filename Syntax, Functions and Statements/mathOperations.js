function mathOperations(n1, n2, str){
    let sum = 0;

    if (str == '+') {
        sum = n1 + n2;
    } else if (str == '-'){
        sum = n1 - n2;
    } else if (str == '*'){
        sum = n1 * n2;
    } else if (str == '/'){
        sum = n1 / n2;
    } else if (str == '%'){
        sum = n1 % n2;
    } else if (str == '**'){
        // exponantiation
        sum = n1 ** n2;
        // sum = Math.pow(n1,n2); // the same result as above line;
    }
    console.log(sum);
}
