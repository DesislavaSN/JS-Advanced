function sumTable() {
 
    const rows = Array.from(document.getElementsByTagName('tr')).slice(1, -1);
    let sum = 0;
    for(let i = 0; i < rows.length; i++){
        const cols = (rows[i]).children;
        const pricePerPr = Number(cols[cols.length-1].textContent);
        sum += pricePerPr;
    }
 
    const totalPrice = document.getElementById('sum').textContent = sum;
}