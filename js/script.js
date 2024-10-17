const light = document.querySelector('.light');

document.addEventListener('mousemove', (event) => {
    light.style.left = event.layerX + 'px';
    light.style.top = event.layerY + 'px';
});