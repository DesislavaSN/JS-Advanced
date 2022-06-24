window.addEventListener('load', solution);

function solution() {

  const fullNameInput = document.querySelector('#fname');
  const emailInput = document.querySelector('#email');
  const phoneNumberInput = document.querySelector('#phone');
  const addressInput = document.querySelector('#address');
  const postalCodeInput = document.querySelector('#code');
  const submitBtn = document.querySelector('#submitBTN');
  submitBtn.addEventListener('click', submitInfo);

  const previewInfoUl = document.querySelector('#infoPreview');
  const editBtn = document.querySelector('#editBTN');
  const continueBtn = document.querySelector('#continueBTN');
  const blockDivContainer = document.querySelector('#block');
  const h3TagEl = createElement('h3', 'Thank you for your reservation!');

  // Submit Button function:
  function submitInfo(event){
    event.preventDefault();
    // console.log('submit is clicked');

    const fullN = fullNameInput.value;
    const email = emailInput.value;
    const phone = phoneNumberInput.value;
    const address = addressInput.value;
    const postCode = postalCodeInput.value;

    if (fullN == '' && email == '') {
      return;
    }

    // create all HTML El for Preview Info container
    const liFullNameEl = createElement('li', 'Full Name: ' + fullN);
    const liEmailEl = createElement('li', 'Email: ' + email);
    const liPhoneEl = createElement('li', 'Phone Number: ' + phone);
    const liAddressEl = createElement('li', 'Address: ' + address);
    const liPostCodeEl = createElement('li', 'Postal Code: ' + postCode);

    // -- append elements to Preview Info container:
    previewInfoUl.appendChild(liFullNameEl);
    previewInfoUl.appendChild(liEmailEl);
    previewInfoUl.appendChild(liPhoneEl);
    previewInfoUl.appendChild(liAddressEl);
    previewInfoUl.appendChild(liPostCodeEl);

    // clear inputs:
    fullNameInput.value = '';
    emailInput.value = '';
    phoneNumberInput.value = '';
    addressInput.value = '';
    postalCodeInput.value = '';

    submitBtn.setAttribute("disabled", "");
    editBtn.removeAttribute('disabled');
    continueBtn.removeAttribute('disabled');

    // Edit Button:
    editBtn.addEventListener('click', (event) => {
      // console.log(event.target, 'edit is clicked');

      previewInfoUl.removeChild(liFullNameEl);
      previewInfoUl.removeChild(liEmailEl);
      previewInfoUl.removeChild(liPhoneEl);
      previewInfoUl.removeChild(liAddressEl);
      previewInfoUl.removeChild(liPostCodeEl);

      fullNameInput.value = fullN;
      emailInput.value = email;
      phoneNumberInput.value = phone;
      addressInput.value = address;
      postalCodeInput.value = postCode;

      submitBtn.removeAttribute('disabled');
      editBtn.setAttribute("disabled", "");
      continueBtn.setAttribute("disabled", "");
    });

    // -- append elements to Preview Info container after Editing info:
    previewInfoUl.appendChild(liFullNameEl);
    previewInfoUl.appendChild(liEmailEl);
    previewInfoUl.appendChild(liPhoneEl);
    previewInfoUl.appendChild(liAddressEl);
    previewInfoUl.appendChild(liPostCodeEl);

    // Continue Button:
    continueBtn.addEventListener('click', (event) => {
      blockDivContainer.innerHTML = '';
      blockDivContainer.appendChild(h3TagEl);

    });
  }

  // create HTML EL-ts function:
  function createElement(type, content, className){
    const element = document.createElement(type);
    element.textContent = content;
    if (className){
        element.classList.add(className);
    }
    return element;
  }

}
