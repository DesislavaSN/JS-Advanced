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

        // първоначално създадох елементите без функция(която е най-долу на кода!)! и всичките съм ги маркирала зада се вийдат как съм ги създала!
        // 1st table row:
        // let firstTrEl = document.createElement('tr');
        // firstTrEl.classList.add('info');
        let firstTrEl = createElement('tr', null, 'info');

        // let td1El = document.createElement('td');
        // td1El.textContent = `${model}`;
        let td1El = createElement('td', model);

        // let td2El = document.createElement('td');
        // td2El.textContent = `${Number(price).toFixed(2)}`;
        let td2El = createElement('td', Number(price).toFixed(2));

        // let td3El = document.createElement('td');
        let td3El = createElement('td');
        // let moreInfoBtn = document.createElement('button');
        // moreInfoBtn.classList.add('moreBtn');
        // moreInfoBtn.textContent = 'More Info';
        let moreInfoBtn = createElement('button', 'More Info', 'moreBtn');

        // let buyBtn = document.createElement('button');
        // buyBtn.classList.add('buyBtn');
        // buyBtn.textContent = 'Buy it';
        let buyBtn = createElement('button', 'Buy it', 'buyBtn');
        
        // -- append both buttons to td3El:
        td3El.appendChild(moreInfoBtn);
        td3El.appendChild(buyBtn);

        // -- append first row elements:
        firstTrEl.appendChild(td1El);
        firstTrEl.appendChild(td2El);
        firstTrEl.appendChild(td3El);

        //2nd table row:
        // let secondTrEl = document.createElement('tr');
        // secondTrEl.classList.add('hide');
        let secondTrEl = createElement('tr', null, 'hide');

        // let td1SecondRowEl = document.createElement('td');
        // td1SecondRowEl.textContent = `Year: ${year}`;
        let td1SecondRowEl = createElement('td', 'Year: ' + year);

        // let td2SecondRowEl = document.createElement('td');
        // td2SecondRowEl.setAttribute('colspan', '3');
        // td2SecondRowEl.textContent = `Description: ${description}`;
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

        moreInfoBtn.addEventListener('click', () => {
            if (moreInfoBtn.textContent == 'More Info') {
                moreInfoBtn.textContent = 'Less Info';
                secondTrEl.style.display = 'contents';
            } else {
                moreInfoBtn.textContent = 'More Info';
                secondTrEl.style.display = 'none';
            }
            
            // console.log('button is clicked'); 
        });

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

