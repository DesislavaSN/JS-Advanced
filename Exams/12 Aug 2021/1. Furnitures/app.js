// 100 / 100

window.addEventListener('load', solve);

function solve() {

    const modelInput = document.querySelector('#model');
    const yearInput = document.querySelector('#year');
    const descriptionInput = document.querySelector('#description');
    const priceInput = document.querySelector('#price');
    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', add);

    const tableBody = document.querySelector('#furniture-list');
    const totalPriceTableDate = document.querySelector('.total-price');
    let totalPrice = 0;

    function add(event){
        event.preventDefault();
        const model = modelInput.value;
        const year = yearInput.value;
        const description = descriptionInput.value;
        const price = priceInput.value;

        if (model == '' || description == '' || year < 0 || price < 0) {
            return;
        }

        // 1st table row:
        let firstTrEl = createElement('tr', null, 'info');
        let td1El = createElement('td', model);
        let td2El = createElement('td', Number(price).toFixed(2));
        let td3El = createElement('td');
        let moreInfoBtn = createElement('button', 'More Info', 'moreBtn');
        let buyBtn = createElement('button', 'Buy it', 'buyBtn');
        
        // -- append both buttons to td3El:
        td3El.appendChild(moreInfoBtn);
        td3El.appendChild(buyBtn);

        // -- append first row elements:
        firstTrEl.appendChild(td1El);
        firstTrEl.appendChild(td2El);
        firstTrEl.appendChild(td3El);

        //2nd table row:
        let secondTrEl = createElement('tr', null, 'hide');
        let td1SecondRowEl = createElement('td', 'Year: ' + year);
        let td2SecondRowEl = createElement('td', 'Description: ' + description);
        td2SecondRowEl.setAttribute('colspan', '3');

        // -- append second row elements:
        secondTrEl.appendChild(td1SecondRowEl)
        secondTrEl.appendChild(td2SecondRowEl)

        // -- append both rows elements:
        tableBody.appendChild(firstTrEl);
        tableBody.appendChild(secondTrEl);
        
        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';

        // Event toggle button More / Less Info 
        moreInfoBtn.addEventListener('click', () => {
            if (moreInfoBtn.textContent == 'More Info') {
                moreInfoBtn.textContent = 'Less Info';
                secondTrEl.style.display = 'contents';
            } else {
                moreInfoBtn.textContent = 'More Info';
                secondTrEl.style.display = 'none';
            }
        });
    
        // Event Buy button:
        buyBtn.addEventListener('click', (event) => {
            totalPrice += Number(price);
            totalPriceTableDate.textContent = totalPrice.toFixed(2);
            firstTrEl.remove();
            secondTrEl.remove();
        });
    }

    // Creat HTML Elements function 
    function createElement(type, content, className){
        const element = document.createElement(type);
        element.textContent = content;
        if (className){
            element.classList.add(className);
        }
        return element;
    }
}

