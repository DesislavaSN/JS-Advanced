function colorize() {
    const rows = Array.from(document.getElementsByTagName('tr'));
    for(let i = 1; i < rows.length; i+=2){
        rows[i].style.background = 'pink';
    }
}
 
// // 2nd variation:
// function colorize() {
//     const rows = document.querySelectorAll('tr:nth-child(2n)')
//     .forEach(el => el.style.background = 'teal');
 
// }