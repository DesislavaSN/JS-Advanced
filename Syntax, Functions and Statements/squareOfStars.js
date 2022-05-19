function squareOfStars(num = 5){
    let star = '* ';

    for(let i = 1; i <= num; i++){
        let res = star.repeat(num);
        console.log(res);
    }
}
