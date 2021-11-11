// var value = document.getElementById('value');
// var colors = document.getElementById('image-swap')

// document.getElementById('input').oninput = function() {
//     var filter = 'hue-rotate(xdeg' .replace('x', this.value);
//     value.textContent = filter;
//     colors.style.filter = filter;
//     colors.style.webkitFilter = filter;
// }

let slider = document.getElementById("slider");
let img =document.getElementById("imageswap");

function changeHue(){
    let value = slider.value;
    console.log('value');
    img.style.filter = `hue-rotate(${value}deg)`
}

slider.addEventListener('input', changeHue);