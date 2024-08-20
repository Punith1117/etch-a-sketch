
function makeGrid(size) {
    let container = document.querySelector('.container');
    
    for (i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.className = 'item';
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

let size = document.querySelector('.grid-size');
console.log(size.value);//default grid-size
makeGrid(size.value);
size.addEventListener('click', () => {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    makeGrid(size.value);
});

            
function getitems() {
    let items = document.querySelectorAll('.item');
    console.log(items);
    return items;
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let marker = document.querySelector('.marker');
marker.addEventListener('click', () => {
    useSketchPad('marker');
});

let pencil = document.querySelector('.pencil');
pencil.addEventListener('click', () => {
    useSketchPad('pencil');
});
let eraser = document.querySelector('.erase');
eraser.addEventListener('click', () => {
    useSketchPad('eraser');
});
let magic = document.querySelector('.magic');
magic.addEventListener('click', () => {
    useSketchPad('magic');
});
let getUserColor = document.querySelector('.submit');
getUserColor.addEventListener('click', () => {
    let userColor = document.querySelector('#input-color');
    useSketchPad(userColor.value);
});


let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    let divs = getitems();
    divs.forEach((div) => {
        div.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    });
});
function useSketchPad(brush) {
    console.log(brush);
    let divs = getitems();
    console.log(divs);
    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            if(brush == 'marker') {
                div.style.backgroundColor = 'rgb(0, 0, 0)';
            } else if (brush == 'pencil') {
                div.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            } else if (brush == 'eraser') {
                div.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            } else if (brush == 'magic') {
                let randomColor = getRandomColor();
                console.log(randomColor);
                div.style.backgroundColor = randomColor;
            } else {
                div.style.backgroundColor = brush;
            }
        })});
    }
