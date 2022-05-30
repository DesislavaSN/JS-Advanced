function calc() {
    // TODO: sum = num1 + num2
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    let result = num1 + num2;
 
    if (Number.isNaN(result)) {
        alert('Please, enter numbers');
    } else {
        document.getElementById('sum').value = result;
    }
}