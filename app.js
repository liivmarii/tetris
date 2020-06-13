// Creates a single div inside of the tetris-container in dom
function createCells() {

    let tetrisCell = document.createElement('div')
    document.querySelector('#tetris-container').appendChild(tetrisCell)

}

document.addEventListener('DOMContentLoaded', () => {

    // Fills the tetris container with cells
    let newCell;
    for (newCell = 0; newCell < 200; newCell++) createCells()

    // Tetromino code
    const grid = document.querySelector('#tetris-container')
    let squares = Array.from(document.querySelectorAll('#tetris-container div'))
    const width = 10

    const jTetromino = [
        [1, 2, width + 1, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [0, width, width + 1, width + 2]
    ]

    const lTetromino = [
        [0, 1, width + 1, width * 2 + 1],
        [2, width + 2, width + 1, width],
        [1, width + 1, width * 2 + 1, width * 2 + 2],
        [width, width + 1, width + 2, width * 2]
    ]

    const sTetromino = [
        [width * 2, width * 2 + 1, width + 1, width + 2],
        [0, width, width + 1, width * 2 + 1],
        [width * 2, width * 2 + 1, width + 1, width + 2],
        [0, width, width + 1, width * 2 + 1]
    ]

    const zTetromino = [
        [width, width + 1, width * 2 + 1, width * 2 + 2],
        [2, width + 2, width + 1, width * 2 + 1],
        [width, width + 1, width * 2 + 1, width * 2 + 2],
        [2, width + 2, width + 1, width * 2 + 1]
    ]

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ]

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ]

    const tetrominoShapes = [jTetromino, lTetromino, sTetromino, zTetromino, oTetromino, tTetromino, iTetromino]

    let currentPosition
    let currentRotation
    let randomTetromino
    let currentTetromino

    // Randomly select tetromino in its first rotation
    function setCurrentTetromino() {
        currentPosition = 4
        currentRotation = 0
        randomTetromino = Math.floor(Math.random()*tetrominoShapes.length)
        console.log(randomTetromino)
        currentTetromino = tetrominoShapes[randomTetromino][currentRotation]
    }

    setCurrentTetromino()

    // Draw random tetromino
    function drawTetromino() {
        currentTetromino.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    drawTetromino()

    // Undraw random tetromino
    function undrawTetromino() {
        currentTetromino.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }

    // Displaying the game score
    const scoreDisplay = document.querySelector('#score')

    // Start / pause game
    const startPause = document.querySelector('#start-btn')

})