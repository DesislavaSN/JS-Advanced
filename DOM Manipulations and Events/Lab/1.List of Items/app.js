function addItem() {

    const input = document.getElementById('newItemText');
    const newLi = document.createElement('li');
    document.getElementById('items').appendChild(newLi).textContent = input.value;
    input.value = '';

}

