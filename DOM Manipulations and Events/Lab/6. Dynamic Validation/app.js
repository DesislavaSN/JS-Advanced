function validate() {
    const pattern =  /.+@.+\.\w{2,3}/g;
    const input = document.getElementById('email');
    input.addEventListener('change', onChanged);

    function onChanged(event){
        let value = event.target.value.toLowerCase();
        // console.log(value);
        if (pattern.test(value) == false) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
}