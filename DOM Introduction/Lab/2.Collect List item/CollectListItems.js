function extractText() {
 
    const result = [];
    const allLi = document.getElementsByTagName('li');
    const arrLi = Array.from(allLi);
    arrLi.forEach(el => result.push(el.textContent));
    document.getElementById('result').value = result.join('\n');
 
}
