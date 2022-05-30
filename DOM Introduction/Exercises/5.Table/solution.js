function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableRows = Array.from(document.getElementsByTagName('tr'));
      const search = document.getElementById('searchField');
      for(let i = 2; i < tableRows.length; i++){
         if (tableRows[i].textContent.includes(search.value)) {
            // console.log('true');
            tableRows[i].classList.add("select");
            // tableRows[i].classList.remove("select"); // ?????

         }
      }
      search.value = '';
   }
}

