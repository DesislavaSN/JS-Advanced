function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const hiddenText = document.getElementById('extra');
 
    if (hiddenText.style.display === 'none') {
        button.textContent = 'Less';
        hiddenText.style.display = 'block';
    } else {
        button.textContent = 'More';
        hiddenText.style.display = 'none';
    }
}