document.addEventListener('DOMContentLoaded', () => {

    // Populating tetris grid
    for (let square = 0; square < 200; square++) {
        let newSquare = document.createElement('div')
        document.querySelector('.grid').appendChild(newSquare)
    }

    for (let square = 0; square < 10; square++) {
        let newSquare = document.createElement('div')
        newSquare.classList.add('taken')
        document.querySelector('.grid').appendChild(newSquare)
    }

})
