function validate() {
    const emailRegExp = /.+@.+\.\w{2,3}/gm;
    const input = document.getElementById('email');
    
    input.addEventListener('change', (event) => {
        let valueInput = event.target.value.toLowerCase();
        // console.log(event.target.value);
        // console.log(emailRegExp.test(valueInput) == false);

        if (emailRegExp.test(valueInput) == false) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
};