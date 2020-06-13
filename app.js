document.addEventListener('DOMContentLoaded', () => {
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
    function drawTetromino() {
        currentTetromino.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    // Undraw random tetromino
    function undrawTetromino() {
        currentTetromino.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }

    // Move current tetromino down
    timeId = setInterval(moveTetrominoDown, 1000)

    function moveTetrominoDown() {
        undrawTetromino()
        currentPosition += width
        drawTetromino()
        freezeTetromino()
    }

    moveTetrominoDown()

    // Freeze current tetromino and set new random tetromino
    function freezeTetromino() {
        if (currentTetromino.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            currentTetromino.forEach(index => squares[currentPosition + index].classList.add('taken'))

            setCurrentTetromino()
            drawTetromino()
        }
    }

    // Displaying the game score
    const scoreDisplay = document.querySelector('#score')

    // Start / pause game
    const startPause = document.querySelector('#start-btn')

})