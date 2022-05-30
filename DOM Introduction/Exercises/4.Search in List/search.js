function search() {
  let counter = 0;
  const liItems = Array.from(document.getElementsByTagName("li"));
  const search = document.getElementById("searchText");

   for (const li of liItems) {
      let liText = li.textContent;
      if (liText.includes(search.value)) {
         // console.log('true');
         counter++;
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
      } 
   }
   const resultFound = document.getElementById('result').textContent = `${counter} matches found`;
   search.value = '';
}

