// Creates a single div inside of the tetris-container in dom
function createCells() {

    let tetrisCell = document.createElement('div')
    tetrisCell.id = 'tetris-cell'

    document.getElementById('tetris-container').appendChild(tetrisCell)

}

document.addEventListener('DOMContentLoaded', () => {

    // Fills the tetris container with cells
    let newCell;
    for (newCell = 0; newCell < 200; newCell++) createCells()

    // Tetromino code
    const grid = document.querySelector('#tetris-container')
    let cells = Array.from(document.querySelectorAll('#tetris-cell'))
    const tetrominoWidth = 10

    // Displaying the game score
    const scoreDisplay = document.querySelector('#score')

    // Start / pause game
    const startPause = document.querySelector('#start-btn')



})