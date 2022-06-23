// 50/100 !??!?! 

window.addEventListener('load', solve);

function solve() {
    const genreInput = document.querySelector('#genre');
    const nameOfSongInput = document.querySelector('#name');
    const authorOfSongInput = document.querySelector('#author');
    const creationDateInput = document.querySelector('#date');
    const addSongButton = document.querySelector('#add-btn');
    addSongButton.addEventListener('click', addSong);

    const collectionSongs = document.querySelector('section .all-hits-container');
    const likesSection = document.querySelector('#total-likes .likes p');
    let totalLikes = 0;
    const savedSection = document.querySelector('#saved-hits .saved-container');

    function addSong(event){
        event.preventDefault();
        // console.log('add song btn clicked!');
        const genre = genreInput.value;
        const name = nameOfSongInput.value;
        const author = authorOfSongInput.value;
        const date = creationDateInput.value;

        if (genre == '' || name == '' || author == '' || date == '') {
            return;
        }

        collectionSongs.innerHTML += `<div class="hits-info">
        <img src="./static/img/img.png">
        <h2>Genre: ${genre}</h2>
        <h2>Name: ${name}</h2>
        <h2>Auhtor: ${author}</h2>
        <h3>Date: ${date}</h3>
        <button class="save-btn">Save song</button>
        <button class="like-btn">Like song</button>
        <button class="delete-btn">Delete</button>
        </div>`.trim();

        genreInput.value = '';
        nameOfSongInput.value = '';
        authorOfSongInput.value = '';
        creationDateInput.value = '';

        const likeBtn = collectionSongs.querySelector('.like-btn');
        likeBtn.addEventListener('click', () => {
            totalLikes++;
            likesSection.textContent = `Total Likes: ${totalLikes}`;
            likeBtn.disabled = true;
        });

        const savedBtn = collectionSongs.querySelector('.save-btn');
        savedBtn.addEventListener('click', (event) => {
            // console.log('saved Btn clicked');
            savedSection.innerHTML += `<div class="hits-info">
            <img src="./static/img/img.png">
            <h2>Genre: ${genre}</h2>
            <h2>Name: ${name}</h2>
            <h2>Author: ${author}</h2>
            <h3>Date: ${date}</h3>
            <button class="delete-btn">Delete</button>
            </div>`

            event.target.parentNode.remove();
        });

        const deleteBtn = collectionSongs.querySelector('.delete-btn');
        const delBtn = savedSection.querySelector('button');

        deleteBtn.addEventListener('click', deleteElement);
        delBtn.addEventListener('click', deleteElement);

        function deleteElement(event){
            event.target.parentNode.remove();
        }
    }
}