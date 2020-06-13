document.addEventListener('DOMContentLoaded', () => {

    const tetrisGrid = document.querySelector('#tetris-grid')
    const miniGrid = document.querySelector('#mini-grid')
    let square
    const tetrisSquares = Array.from(document.querySelectorAll('#tetris-grid div'))
    const miniSquares = Array.from(document.querySelectorAll('#mini-grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#start-btn')
    const width = 10


    // Populating tetris and mini grids in DOM
    function tetrisSquare() {
        let newSquare = document.createElement('div')
        tetrisGrid.appendChild(newSquare)
    }

    for (square = 0; square < 200; square++) tetrisSquare()

    function takenTetrisSquare() {
        let newSquare = document.createElement('div')
        square.classList.add('taken')
        tetrisGrid.appendChild(newSquare)
    }

    for (square = 0; square < 10; square++) takenTetrisSquare()

    function miniSquare() {
        let newSquare = document.createElement('div')
        miniGrid.appendChild(newSquare)
    }

    for (square = 0; square < 16; square++) miniSquare()

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

    //
})
