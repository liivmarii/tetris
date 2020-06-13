document.addEventListener('DOMContentLoaded', () => {

    timeId = setInterval(moveDown, 1000)

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

    let current = tetrominoShapes[randomTetromino][currentRotation]

    // Draw and undraw random current tetromino
    function draw() {
        current.forEach(index => {
            tetrisSquares[currentPosition + index].classList.add('tetromino')
        })
    }

    function undraw() {
        current.forEach(index => {
            tetrisSquares[currentPosition + index].classList.remove('tetromino')
        })
    }

    // Move current tetromino around

    function moveLeft() {
        undraw()
        
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

        if (!isAtLeftEdge) currentPosition -= 1

        if (current.some(index => tetrisSquares[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1
        }

        draw()
    }

    function moveRight() {
        undraw()

        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)

        if (!isAtRightEdge) currentPosition += 1

        if (current.some(index => tetrisSquares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -= 1
        }

        draw()
    }

    function rotate() {
        undraw()

        currentRotation ++

        // If rotation completes, return to initial
        if (currentRotation == current.length) currentRotation = INITIAL_ROTATION

        current = tetrominoShapes[randomTetromino][currentRotation]

        draw()
    }

    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    // Keyboard controls
    function control(e) {
        if(e.keyCode === 37 || e.keyCode === 65) moveLeft()
        if(e.keyCode === 39 || e.keyCode === 68) moveRight()
        if(e.keyCode === 38 || e.keyCode === 87) rotate()
    }

    function pushDown(e) {
        if(e.keyCode === 83 || e.keyCode === 40) moveDown()
    }

    document.addEventListener('keyup', control)
    document.addEventListener('keyup', pushDown)
    document.addEventListener('keydown', pushDown)

    // Freeze tetromino if...
    function freeze() {
        if (current.some(index => tetrisSquares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => tetrisSquares[currentPosition + index].classList.add('taken'))

            //New Current tetromino
            randomTetromino = Math.floor(Math.random() * tetrominoShapes.length)
            current = tetrominoShapes[randomTetromino][currentRotation]
            currentPosition = INITIAL_POSITION
            draw()
        }
    }

    moveDown()
})
