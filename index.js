const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const score = document.querySelector('#score')
let cells = []

function createGrid() {

    for ( let i = 0; i < 100 ; i++ ) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        grid.appendChild(cell)
        cells.push(cell)
    }
}

createGrid()