document.addEventListener('DOMContentLoaded', () => {
    // Displaying the game score
    const scoreDisplay = document.querySelector('#score')

    // Start / pause game
    const startPause = document.querySelector('#start-btn')

    // Creates a single div inside of the tetris grid
    function createSquare() {
        let tetrisSquare = document.createElement('div')
        document.querySelector('#tetris-container').appendChild(tetrisSquare)
    }

    function createTakenSquare() {
        let tetrisSquare = document.createElement('div')
        tetrisSquare.classList.add('taken')
        document.querySelector('#tetris-container').appendChild(tetrisSquare)
    }

    // Fills the tetris grid with squares
    let newSquare;
    for (newSquare = 0; newSquare < 200; newSquare++) createSquare()
    for (newSquare = 0; newSquare < 10; newSquare++) createTakenSquare()

    // Tetromino shapes
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
    function draw() {
        currentTetromino.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    // Undraw random tetromino
    function undraw() {
        currentTetromino.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }

    // Move current tetromino down every second
    timeId = setInterval(moveDown, 1000)

    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    moveDown()

    // Freeze current tetromino and set new random tetromino
    function freeze() {
        if (currentTetromino.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            currentTetromino.forEach(index => squares[currentPosition + index].classList.add('taken'))

            setCurrentTetromino()
            draw()
        }
    }

    // Move tetromino around in grid
    function moveLeft() {
        undraw()

        const isALeftEdge = currentTetromino.some(index => (currentPosition + index) % width === 0)

        if(!isALeftEdge) currentPosition -= 1

        if(currentTetromino.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1
        }

        draw()
    }

    function moveRight() {
        undraw()

        const isAtRightEdge = currentTetromino.some(index => (currentPosition + index) % width === width - 1)

        if (!isAtRightEdge) currentPosition+= 1

        if (currentTetromino.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -= 1
        }

        draw()
    }

    function rotate() {

    }

    // Assign functions to keyCodes
    function control(e) {
        if(e.keyCode === 37 || e.keyCode === 65) moveLeft()
        else if (e.keyCode === 38 || e.keyCode === 87) rotate()
        else if (e.keyCode === 39 || e.keyCode === 68) moveRight()
        else if (e.keyCode === 40 || e.keyCode === 83) moveDown()
    }
    document.addEventListener('keyup', control)

})