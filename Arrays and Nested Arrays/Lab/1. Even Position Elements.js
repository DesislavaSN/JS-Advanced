function evenPositionEl(arr){
    
    let newArr = [];
    for(let i = 0; i < arr.length; i+=2){
        newArr.push(arr[i]);
    }
    console.log(newArr.join(' '));
}

evenPositionEl(['20', '30', '40', '50', '60']);
evenPositionEl(['5', '10']);
