function notify(message) {
  const divNotify = document.getElementById('notification');
  divNotify.textContent = message;
  divNotify.style.display = 'block';

  divNotify.addEventListener('click', () =>{
    divNotify.style.display = 'none';
  });
}