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
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1]
    ]

    const zTetromino = [
        [width, width + 1, width * 2 + 1, width * 2 + 2],
        [2, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width * 2 + 1, width * 2 + 2],
        [2, width + 1, width + 2, width * 2 + 1]
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

    let currentTetromino = tetrominoShapes[0][0]

    // Draw random current tetromino
    function draw() {
        currentTetromino.forEach(index => {
            tetrisSquares[currentPosition + index].classList.add('tetromino')
        })
    }

    draw()
})
