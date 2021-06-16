const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#FFFFFF', '#C0C0C0', '#808080', '#000000']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1D1D1D';
    element.style.boxShadow = `0 0 2px #111`;

}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index];
}