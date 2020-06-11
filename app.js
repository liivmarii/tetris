// Creates a single div inside of the tetris-container in dom
function createCells() {

    let tetrisCell = document.createElement('div')
    tetrisCell.id = 'tetris-cell'

    document.getElementById('tetris-container').appendChild(tetrisCell)

}

document.addEventListener('DOMContentLoaded', () => {

    // Fills the tetris container with cells
    let newCell;
    for (newCell = 0; newCell < 200; newCell++) createCells()

})