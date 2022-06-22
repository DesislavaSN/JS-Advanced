window.addEventListener("load", solve);

function solve() {
    // console.log('...works');
    const firstNameInput = document.querySelector('#fname');
    const lastNameInput = document.querySelector('#lname');
    const emailInput = document.querySelector('#email');
    const dateOfBirthInput = document.querySelector('#birth');
    const positionInput = document.querySelector('#position');
    const salaryInput = document.querySelector('#salary');

    const hireWorkerBtn = document.querySelector('#add-worker');
    hireWorkerBtn.addEventListener('click', addWorker);

    const tableBody = document.querySelector('#tbody');
    const budgetSalary = document.querySelector('span#sum');

    let sum = 0;

    // Add worker 
    function addWorker(event){
        event.preventDefault();

        const fName = firstNameInput.value;
        const lName = lastNameInput.value;
        const email = emailInput.value;
        const dOB = dateOfBirthInput.value;
        const position = positionInput.value;
        const salary = salaryInput.value;

        if (fName == '' || lName == '' || email == '' || dOB == '' || position == '' || salary == '') {
            return;
        }

        tableBody.innerHTML += `<tr>
        <td>${fName}</td>
        <td>${lName}</td>
        <td>${email}</td>
        <td>${dOB}</td>
        <td>${position}</td>
        <td>${salary}</td>
        <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>
        </tr>`;

        sum += Number(salary);
        budgetSalary.textContent = `${sum.toFixed(2)}`;

        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        dateOfBirthInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';


        // Edit worker button
        const editBtn = tableBody.querySelector('.edit');
        editBtn.addEventListener('click', editWorker);
        // Fired worker button
        const firedBtn = tableBody.querySelector('.fired');
        firedBtn.addEventListener('click', firedWorker);


        function editWorker(event){
            // console.log('edit btn got clicked');

            firstNameInput.value = fName;
            lastNameInput.value = lName;
            emailInput.value = email;
            dateOfBirthInput.value = dOB;
            positionInput.value = position;
            salaryInput.value = salary;
            sum -= Number(salary);
            budgetSalary.textContent = `${sum.toFixed(2)}`;
            event.target.parentNode.parentNode.remove();

        }

        function firedWorker(event){
            // console.log('fired btn got clicked');

            sum -= Number(salary);
            budgetSalary.textContent = `${sum.toFixed(2)}`;
            event.target.parentNode.parentNode.remove();
        }
    }
}
