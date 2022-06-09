function attachGradientEvents() {
    
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseMove);
    gradient.addEventListener('mouseout', onMouseOut);
    const res = document.getElementById('result');

    function onMouseMove(event){
        // console.log(event);
        res.textContent = Math.floor((event.offsetX / gradient.clientWidth) * 100) + '%';
    }

    function onMouseOut(event){
        res.textContent = '';
    }
}