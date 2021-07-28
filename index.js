const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const score = document.querySelector('#score')
let cells = []
let currentSnake = [2,1,0]
let direction = 1

function createGrid() {

    for ( let i = 0; i < 100 ; i++ ) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        grid.appendChild(cell)
        cells.push(cell)
    }
}

createGrid()

currentSnake.forEach(index => cells[index].classList.add('snake'))


function move() {
    const tail = currentSnake.pop()
    cells[tail].classList.remove('snake')
    const head = currentSnake.unshift(currentSnake[0] + direction)
    cells[head].classList.add('snake')
}

move()