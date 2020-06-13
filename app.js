document.addEventListener('DOMContentLoaded', () => {

    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#start-btn')
    const width = 10

    // Populating tetris and mini grids in DOM
    const tetrisGrid = document.querySelector('#tetris-grid')
    const miniGrid = document.querySelector('#mini-grid')

    function newTetrisSquare() {
        let newSquare = document.createElement('div')
        tetrisGrid.appendChild(newSquare)
    }

    let tetrisSquare
    for (tetrisSquare = 0; tetrisSquare < 200; tetrisSquare++) newTetrisSquare()

    function newTakenSquare() {
        let newSquare = document.createElement('div')
        newSquare.classList.add('taken')
        tetrisGrid.appendChild(newSquare)
    }

    let takenSquare
    for (takenSquare = 0; takenSquare < 10; takenSquare++) newTakenSquare()

    function newMiniSquare() {
        let newSquare = document.createElement('div')
        miniGrid.appendChild(newSquare)
    }

    let miniSquare
    for (miniSquare = 0; miniSquare < 16; miniSquare++) newMiniSquare()

    const tetrisSquares = Array.from(document.querySelectorAll('#tetris-grid div'))
    const miniSquares = Array.from(document.querySelectorAll('#mini-grid div'))

    // Tetromino shapes
    const iTetromino = [
        [0, width, width * 2, width * 3],
        [0, width, width * 2, width * 3],
        [0, width, width * 2, width * 3],
        [0, width, width * 2, width * 3]
    ]

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]

    const tTetromino = [
        [0, width, width + 1, width * 2],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1],
        [1, width, width + 1, width + 2]
    ]

    const jTetromino = [
        [1, width + 1, width * 2, width * 2 + 1],
        [0, width, width + 1, width + 2],
        [1, 2, width + 1, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 2]
    ]

    const lTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ]

    const sTetromino = [
        [1, 2, width, width + 1],
        [1, width + 1, width + 2, width * 2 + 2],
        [1, 2, width, width + 1],
        [1, width + 1, width + 2, width * 2 + 2]
    ]

    const zTetromino = [
        [0, 1, width + 1, width + 2],
        [1, width, width + 1, width * 2],
            [0, 1, width + 1, width + 2],
        [1, width, width + 1, width * 2]
    ]

    const tetrominoShapes = [
        iTetromino,
        oTetromino,
        tTetromino,
        jTetromino,
        lTetromino,
        sTetromino,
        zTetromino
    ]

    // Current tetromino shape
    const INITIAL_POSITION = 4
    let currentPosition = INITIAL_POSITION

    const INITIAL_ROTATION = 0
    let currentRotation = INITIAL_ROTATION

    let randomTetromino = Math.floor(Math.random() * tetrominoShapes.length)

    let currentTetromino = tetrominoShapes[randomTetromino][currentRotation]

    // Draw random current tetromino
    function draw() {
        currentTetromino.forEach(index => {
            tetrisSquares[currentPosition + index].classList.add('tetromino')
        })
    }

    // Undraw random current tetromino
    function undraw() {
        currentTetromino.forEach(index => {
            tetrisSquares[currentPosition + index].classList.remove('tetromino')
        })
    }

    // Move current tetromino down
    timeId = setInterval(moveDown, 100)

    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    // Freeze tetromino if...
    function freeze() {
        if (currentTetromino.some(index => tetrisSquares[currentPosition + index + width].classList.contains('taken'))) {
            currentTetromino.forEach(index => tetrisSquares[currentPosition + index].classList.add('taken'))

            //New Current tetromino
            randomTetromino = Math.floor(Math.random() * tetrominoShapes.length)
            currentTetromino = tetrominoShapes[randomTetromino][currentRotation]
            currentPosition = INITIAL_POSITION
            draw()
        }
    }

    moveDown()
})
