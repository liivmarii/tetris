document.addEventListener('DOMContentLoaded', () => {

    // Populating tetris grid
    const grid = document.querySelector('.grid')
    const width = 10

    for (let square = 0; square < 200; square++) {
        let newSquare = document.createElement('div')
        grid.appendChild(newSquare)
    }

    for (let square = 0; square < 10; square++) {
        let newSquare = document.createElement('div')
        newSquare.classList.add('taken')
        grid.appendChild(newSquare)
    }

    let squares = Array.from(document.querySelectorAll('.grid div'))

    // Score tally
    const scoreDisplay = document.querySelector('#score')

    // Start / pause btn
    const startBtn = document.querySelector('#start-btn')

    // Tetromino shapes
    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ]
    const jTetromino = [
        [1, width + 1, width * 2, width * 2 + 1],
        [0, width, width + 1, width + 2],
        [1, 2, width + 1, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 2]
    ]
    const lTetromino = [
        [1, width + 1, width * 2 + 1, width * 2 + 2],
        [width, width + 1, width + 2, width * 2],
        [0, 1, width + 1, width * 2 + 1],
        [2, width, width + 1, width + 2]
    ]
    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]
    const sTetromino = [
        [1, 2, width, width + 1],
        [1, width + 1, width + 2, width * 2 + 2],
        [1, 2, width, width + 1],
        [1, width + 1, width + 2, width * 2 + 2]
    ]
    const tTetromino = [
        [0, width, width + 1, width * 2],
        [width, width + 1, width +2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1],
        [1, width, width + 1, width + 2]
    ]
    const zTetromino = [
        [0, 1, width + 1, width + 2],
        [1, width, width + 1, width * 2],
        [0, 1, width + 1, width + 2],
        [1, width, width + 1, width * 2]
    ]

})
