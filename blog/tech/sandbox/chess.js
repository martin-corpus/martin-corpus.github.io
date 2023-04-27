
// create board
// make every other square green
// create pieces and position - 2 dimensional array?
// make logic - piece movement
// make logic - checkmate / stalemate
// make logic - capturing pieces
// make logic - promoting peices
// undo button
//display captured peices
//highlighting legal moves
//show game history

const board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['',  '',  '',  '',  '',  '',  '',  ''],
    ['',  '',  '',  '',  '',  '',  '',  ''],
    ['',  '',  '',  '',  '',  '',  '',  ''],
    ['',  '',  '',  '',  '',  '',  '',  ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ]
  
  function createBoard() {
    const boardPieces = document.querySelector('.board')
  
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        
        square.id = `${String.fromCharCode(97 + j)}${8 - i}`
        boardPieces.appendChild(square)
  
       
      }
    }
  }
  
  createBoard()
  