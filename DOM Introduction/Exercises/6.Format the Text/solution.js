function solve() {

  const textArea = document.getElementById('input').value;
  const arrText = textArea.split('.').filter(sent => sent.length != 0);
  // console.log(arrText);
  const outputArea = document.getElementById("output");

  while(arrText.length !== 0){
    let sentences = arrText.splice(0,3).join('. ') + '.';
    // console.log(sentences);
    const paragraph = document.createElement('p');
    paragraph.textContent = sentences;
    outputArea.appendChild(paragraph);
    textArea.value = '';
  }
}

