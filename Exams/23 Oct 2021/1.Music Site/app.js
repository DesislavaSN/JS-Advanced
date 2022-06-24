window.addEventListener('load', solve);

function solve(){

    const genreInput = document.querySelector('#genre');
    const nameSongInput = document.querySelector('#name');
    const authorSongInput = document.querySelector('#author');
    const dateCreationInput = document.querySelector('#date');
    const addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', addSong);

    const collectionSongsContainer = document.querySelector('#all-hits .all-hits-container');
    const totalLikesParagraph = document.querySelector('#total-likes .likes p');
    let totalLikes = 0;
    const savedSongsContainer = document.querySelector('#saved-hits .saved-container');

    function addSong(event){
        event.preventDefault();

        const genre = genreInput.value;
        const name = nameSongInput.value;
        const author = authorSongInput.value;
        const date = dateCreationInput.value;
        
        if (genre == '' || name == '' || author == '' || date == '') {
            return;
        }

        // Collection of Songs Container:
        const divHitsInfoEl = createElement('div', null, 'hits-info');
        const imageEl = createElement('img');
        imageEl.src = './static/img/img.png';
        const h2ElGenre = createElement('h2', 'Genre: ' + genre);
        const h2ElName = createElement('h2', 'Name: ' + name);
        const h2ElAuthor = createElement('h2', 'Author: ' + author);
        const h3ElDate = createElement('h3', 'Date: ' + date);
        const saveBtn = createElement('button', 'Save song', 'save-btn');
        const likeBtn = createElement('button', 'Like song', 'like-btn');
        const deleteBtn = createElement('button', 'Delete', 'delete-btn');

        // -- append elements to Collection of songs
        divHitsInfoEl.appendChild(imageEl);
        divHitsInfoEl.appendChild(h2ElGenre);
        divHitsInfoEl.appendChild(h2ElName);
        divHitsInfoEl.appendChild(h2ElAuthor);
        divHitsInfoEl.appendChild(h3ElDate);
        divHitsInfoEl.appendChild(saveBtn);
        divHitsInfoEl.appendChild(likeBtn);
        divHitsInfoEl.appendChild(deleteBtn);
        collectionSongsContainer.appendChild(divHitsInfoEl);

        genreInput.value = '';
        nameSongInput.value = '';
        authorSongInput.value = '';
        dateCreationInput.value = '';

        likeBtn.addEventListener('click', () => {
            totalLikes++;
            totalLikesParagraph.textContent = 'Total Likes: ' + totalLikes;
            likeBtn.disabled = true;
        });

        saveBtn.addEventListener('click', () => {
            divHitsInfoEl.appendChild(imageEl);
            divHitsInfoEl.appendChild(h2ElGenre);
            divHitsInfoEl.appendChild(h2ElName);
            divHitsInfoEl.appendChild(h2ElAuthor);
            divHitsInfoEl.appendChild(h3ElDate);
            divHitsInfoEl.querySelector('.save-btn').remove();
            divHitsInfoEl.querySelector('.like-btn').remove()
            divHitsInfoEl.appendChild(deleteBtn);
            savedSongsContainer.appendChild(divHitsInfoEl);
        });

        deleteBtn.addEventListener('click', (event) => {
            // console.log(event.target, 'clicked');
            event.target.parentNode.remove();
        })
    }

    // Create HTML Elements function:
    function createElement(type, content, className){
        const element = document.createElement(type);
        element.textContent = content;
        if (className){
            element.classList.add(className);
        }
        return element;
    }
}
