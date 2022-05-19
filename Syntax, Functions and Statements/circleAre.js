function circleAre(input){

    if (typeof input !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    } else {
        // let area = Math.PI * Math.pow(input, 2);
        let area = Math.PI * input ** 2; // the same as above line
        console.log(area.toFixed(2));
    }
}
