function addItem() {
    
    const input = document.getElementById('newItemText');
    const newLi = document.createElement('li');
    newLi.textContent = input.value;
    const ul = document.getElementById('items').appendChild(newLi);
    input.value = '';

    const deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';
    newLi.appendChild(deleteLink);
    deleteLink.addEventListener('click', deleteEl);

}

function deleteEl(event){
    // console.log('clicked');
    // console.log(event.target);

    event.target.parentElement.remove();
}