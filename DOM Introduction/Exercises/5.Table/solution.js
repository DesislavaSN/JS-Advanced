function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const tableRows = Array.from(document.getElementsByTagName('tr'));
   const search = document.getElementById('searchField');
   
   function onClick() {
      for(let i = 2; i < tableRows.length; i++){
         if (tableRows[i].textContent.includes(search.value)) {
            tableRows[i].classList.add("select");
         } else {
            tableRows[i].classList.remove("select");
      }
      search.value = '';
   }
}

