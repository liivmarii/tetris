document.addEventListener('DOMContentLoaded', () => {

    // Populating tetris and mini grids in DOM
    let newSquare

    function tetrisSquare() {
        let square = document.createElement('div')
        document.querySelector('#tetris-grid').appendChild(square)
    }

    for (newSquare = 0; newSquare < 200; newSquare++) tetrisSquare()

    function takenTetrisSquare() {
        let square = document.createElement('div')
        square.classList.add('taken')
        document.querySelector('#tetris-grid').appendChild(square)
    }

    for (newSquare = 0; newSquare < 10; newSquare++) takenTetrisSquare()

    function miniSquare() {
        let square = document.createElement('div')
        document.querySelector('#mini-grid').appendChild(square)
    }

    for (newSquare = 0; newSquare < 16; newSquare++) miniSquare()
})