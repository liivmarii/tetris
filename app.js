// Creates a single div inside of the tetris-container in dom
function createCells() {

    let tetrisCell = document.createElement('div')
    tetrisCell.id = 'tetris-cell'

    document.querySelector('#tetris-container').appendChild(tetrisCell)

}

document.addEventListener('DOMContentLoaded', () => {

    // Fills the tetris container with cells
    let newCell;
    for (newCell = 0; newCell < 200; newCell++) createCells()

    // Tetromino code
    const grid = document.querySelector('#tetris-container')
    let squares = Array.from(document.querySelectorAll('#tetris-cell'))
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

    let currentPosition = 4

    // Randomly select tetromino in its first rotation
    let randomTetromino = Math.floor(Math.random()*tetrominoShapes.length)
    console.log(randomTetromino)
    let currentTetromino = tetrominoShapes[randomTetromino][0]

    // Tetromino drawings
    function draw() {
        currentTetromino.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    draw()



    // Displaying the game score
    const scoreDisplay = document.querySelector('#score')

    // Start / pause game
    const startPause = document.querySelector('#start-btn')

})