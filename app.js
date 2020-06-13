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

    const theTetrominoes = [
        iTetromino,
        jTetromino,
        lTetromino,
        oTetromino,
        sTetromino,
        tTetromino,
        zTetromino
    ]

    // Set tetromino start position
    const INITIAL_POSITION = 4
    let currentPosition = INITIAL_POSITION

    // Set initial tetromino rotation
    const INITIAL_ROTATION = 0
    let currentRotation = INITIAL_ROTATION

    // Select a random tetromino
    let random = Math.floor(Math.random() * theTetrominoes.length)

    let current = theTetrominoes[random][currentRotation]

    // Draw or undraw a random tetromino
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }

    // Move current tetromino down every second
    timeID = setInterval(moveDown, 1000)

    // Assign functions to keyCodes
    function control (e) {
        if (e.keyCode === 37 || e.keyCode === 65) moveLeft()
        if (e.keyCode === 39 || e.keyCode === 68) moveRight()
        if (e. keyCode === 38 || e.keyCode === 87) rotate()
        if (e.keyCode === 40 || e.keyCode == 83) moveDown()
    }

    document.addEventListener('keyup', control)

    // Move down function
    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    // Freeze current tetromino and draw a new one
    function freeze() {
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))

            currentPosition = INITIAL_POSITION
            currentRotation = INITIAL_ROTATION
            random = Math.floor(Math.random() * theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]

            draw()
        }
    }

    // Move tetromino left unless out of bounds
    function moveLeft() {
        undraw()

        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

        if (!isAtLeftEdge) currentPosition -= 1

        if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1
        }

        draw()
    }

    // Move tetromino right unless out of bounds
    function moveRight() {
        undraw()

        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)

        if (!isAtRightEdge) currentPosition += 1

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -= 1
        }

        draw()
    }

    // Rotate tetromino
    function rotate() {
        undraw()

        currentRotation ++

        if(currentRotation === current.length) {
            currentRotation = INITIAL_ROTATION
        }

        current = theTetrominoes[random][currentRotation]

        draw()
    }

})
