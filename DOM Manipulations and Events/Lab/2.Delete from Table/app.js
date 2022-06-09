function deleteByEmail() {
    // selecet an element by attr. -> querySelector('element[name="email"]');
    // const input = document.querySelector('input[type="text"]'); 
    
    const input = document.querySelector('input[name="email"]');
    const rows = Array.from(document.getElementsByTagName('tbody')[0].children);
    const res = document.getElementById('result');

    let isFound = false;
    for (const row of rows) {
        if (row.children[1].textContent == input.value) {
            row.remove(); 
            input.value = '';
            isFound = true;
        } 
    }

    isFound == true ? res.textContent = 'Deleted.' : res.textContent = 'Not found.';
}

