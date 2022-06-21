// 75/100

window.addEventListener("load", solve);

function solve(){
    // console.log('works...');

    const titleInput = document.querySelector('#post-title');
    const categoryInput = document.querySelector('#post-category');
    const contentAreaInput = document.querySelector('#post-content');
    const publishButton = document.querySelector('#publish-btn');
    publishButton.addEventListener('click', publishContent);

    const reviewListDivEl = document.querySelector('#review-list');
    const publishListDivEl = document.querySelector('#published-list');
    const clearButton = document.querySelector('#clear-btn');
    clearButton.addEventListener('click', clear);

    function publishContent(event){
        event.preventDefault();
        // console.log('clicked');

        let title = titleInput.value;
        let category = categoryInput.value;
        let content = contentAreaInput.value;
        console.log(title, category, content);

        if (title == '' || category == '' || content == '') {
            return;
        }

        reviewListDivEl.innerHTML = `<li class="rpost">
        <article>
        <h4>${title}</h4>
        <p>Category: ${category}</p>
        <p>Content: ${content}</p>
        </article>
        <button class="action-btn edit">Edit</button>
        <button class="action-btn approve">Approve</button>
        </li>`;

        const editBtn = reviewListDivEl.querySelector('.edit');
        editBtn.addEventListener('click', edit);
        const approveBtn = reviewListDivEl.querySelector('.approve');
        approveBtn.addEventListener('click', approve);
        
        titleInput.value = '';
        categoryInput.value = '';
        contentAreaInput.value = '';

        function edit(event){
            // console.log('clicked Edit btn');
            titleInput.value = title;
            categoryInput.value = category;
            contentAreaInput.value = category;
            reviewListDivEl.textContent = '';
        }

        function approve(event){
            // console.log('clicked Approve btn');
            reviewListDivEl.textContent = '';
            publishListDivEl.innerHTML += `<li class="rpost">
            <article>
            <h4>${title}</h4>
            <p>Category: ${category}</p>
            <p>Content: ${content}</p>
            </article>
            </li>`
        }
    }

    function clear(){
        // console.log('clear btn is clicked');
        publishListDivEl.textContent = '';
    }

}