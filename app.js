document.addEventListener('DOMContentLoaded', () => {

    const tetrisGrid = document.querySelector('#tetris-grid')
    const miniGrid = document.querySelector('#mini-grid')
    let square
    let tetrisSquares = Array.from(document.querySelectorAll('#tetris-grid div'))
    let miniSquares = Array.from(document.querySelectorAll('#mini-grid div'))
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


})