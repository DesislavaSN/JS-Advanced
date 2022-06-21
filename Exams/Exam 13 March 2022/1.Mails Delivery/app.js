// 72 / 100

window.addEventListener("load", solve);

function solve() {

    const recipientNameInput = document.querySelector('#recipientName');
    const titleInput = document.querySelector('#title');
    const messageInput = document.querySelector('#message');

    const addListBtn = document.querySelector('form .action #add');
    const resetListBtn = document.querySelector('form .action #reset');
    addListBtn.addEventListener('click', addList);
    resetListBtn.addEventListener('click', resetList);

    const listOfMails = document.querySelector('.list-mails #list');
    const sentMailsPart = document.querySelector('.sent-mails .sent-list');
    const deleteMailsPart = document.querySelector('div.trash .delete-list');
    

    // Add Mails:
    function addList(event){
        event.preventDefault();
        // console.log('add clicked');

        const recipient = recipientNameInput.value;
        const title = titleInput.value;
        const message = messageInput.value;

        if (recipient == '' || title == '' || message == '') {
            return;
        }  

        listOfMails.innerHTML += `<li>
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${recipient}</h4>
        <span>${message}</span>
        <div id="list-action">
        <button type="submit" id="send">Send</button>
        <button type="submit" id="delete">Delete</button>
        </div>
        </li>`;

        // List of Mails 
        const sendListOfMailsBtn = listOfMails.querySelector('#list-action #send');
        sendListOfMailsBtn.addEventListener('click', sendMails);
        const deleteListOfMailsBtn = listOfMails.querySelector('#list-action #delete');
        deleteListOfMailsBtn.addEventListener('click', deleteMails);
                

        function sendMails(event){
            event.preventDefault();
            // console.log('send mails btn clicked');

            sentMailsPart.innerHTML += `<li>
            <span>To: ${recipient}</span>
            <span>Title: ${title}</span>
            <div class="btn">
            <button type="submit" class="delete">Delete</button>
            </div>
            </li>`;
            listOfMails.textContent = '';

            // Sent Mails
            const deleteSentMailsBtn = sentMailsPart.querySelector('div.btn .delete');
            deleteSentMailsBtn.addEventListener('click', deleteMails);
        }

        function deleteMails(event){
            event.preventDefault();
            // console.log('delete mails btn clicked');
            // let parentEl = event.target.parentNode.parentNode;
           
            deleteMailsPart.innerHTML += `<li>
            <span>To: ${recipient}</span>
            <span>Title: ${title}</span>
            </li>`;

            listOfMails.textContent = '';
            sentMailsPart.textContent = '';
    
        }
    }

    function resetList(event){
        event.preventDefault();
        recipientNameInput.value = '';
        titleInput.value = '';
        messageInput.value = ''
    }
}

// solve()