const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const score = document.querySelector('#score')
let cells = []
let currentSnake = [2,1,0]
let direction = 1
const width = 10
let appleIndex = 0

function createGrid() {

    for ( let i = 0; i < width*width ; i++ ) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        // cell.textContent = i
        grid.appendChild(cell)
        cells.push(cell)
    }
}

createGrid()

currentSnake.forEach(index => cells[index].classList.add('snake'))


function move() {

    if (
        (currentSnake[0] + width >= width*width && direction === width) || //if snake hits the bottom border
        (currentSnake[0] % width === width -1 && direction === 1) || //if the snake hits the right border
        (currentSnake[0] - width <= 0 && direction === -width) || //if the snake hits the top border
        (currentSnake[0] % width === 0 && direction === -1) ||
        cells[currentSnake[0] + direction].classList.contains('snake') //if the snake hits the top border
    ) {
        return clearInterval(timerId)
    }

        

    const tail = currentSnake.pop()
    cells[tail].classList.remove('snake')
    const head = currentSnake.unshift(currentSnake[0] + direction)
    console.log(currentSnake)
    
    if (currentSnake[0] === appleIndex) {
        cells[appleIndex].classList.remove('apple')
        cells[tail].classList.add('snake')
        currentSnake.push(tail)
        generateApple()

    }
    
    
    
    cells[currentSnake[0]].classList.add('snake')

}


let timerId = setInterval(move, 1000)

function generateApple() {
    do {
        appleIndex = Math.floor(Math.random() * cells.length)
    } while (cells[appleIndex].classList.contains('snake'))
    cells[appleIndex].classList.add('apple')
}

generateApple()

function control(e) {
    if (e.keyCode === 39) {
        direction = 1
    } else if (e.keyCode === 38) {
        direction = -width
    } else if (e.keyCode === 37) {
        direction = -1
    } else if (e.keyCode === 40) {
        direction = +width
    }
}

document.addEventListener('keydown', control)


