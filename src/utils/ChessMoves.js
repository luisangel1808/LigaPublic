const ChessMoves = () => {

  const up = (col, row, piece, board, am=false) =>{
    const totalMoves = [];
    let revCont = 1;
    while(row>0){
      row--;
      if(!am){
        const newBoard = []
        newBoard.push(...JSON.parse(JSON.stringify(board)));
        newBoard[row][col] = piece;
        newBoard[row+revCont][col] = "";
        revCont++;
        if (isOcupped(board, col,row, piece) === 'same') 
          break;
          if(isKing(piece)){
            if(validateMove(`${col}${row}`,newBoard, piece))
              totalMoves.push(`${col}${row}`);
            break;
          }
        else {
          if(piece==="R" || piece ==="Q"){
            if(validateMove(findKings(newBoard)[0], newBoard, piece)){
              totalMoves.push(`${col}${row}`);
            }
          }
        else{
            if(validateMove(findKings(newBoard)[1], newBoard, piece))
            totalMoves.push(`${col}${row}`);
          }
        }
      }
      if (isOcupped(board, col,row, piece) === 'same') {
        if (am){
          totalMoves.push(`${col}${row}`);
        }
        break;
      }
      if(am && (isOcupped(board, col, row, piece) === 'pass' || isOcupped(board,col,row,piece)==='capture')) totalMoves.push(`${col}${row}`);
      if (isOcupped(board, col,row, piece) === 'capture'  || isKing(piece)) break;
    }
    return totalMoves;
  }
  const down = (col, row, piece, board, am=false) =>{
    const totalMoves = [];
    let revCont = 1;
    while(row<7){
      row++;
      if(!am){
        const newBoard = []
        newBoard.push(...JSON.parse(JSON.stringify(board)));
        newBoard[row][col] = piece;
        newBoard[row-revCont][col] = "";
        revCont++;
        if (isOcupped(board, col,row, piece) === 'same') 
          break;
          if(isKing(piece)){
            if(validateMove(`${col}${row}`,newBoard, piece))
              totalMoves.push(`${col}${row}`);
            break;
          }
        else {
          if(piece==="R" || piece ==="Q"){
            if(validateMove(findKings(newBoard)[0], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        else{
            if(validateMove(findKings(newBoard)[1], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        }
      }
      if (isOcupped(board, col,row, piece) === 'same') {
        if (am){
          totalMoves.push(`${col}${row}`);
        }
        break;
      }

      if(am && (isOcupped(board, col, row, piece) === 'pass' || isOcupped(board,col,row,piece)==='capture')) totalMoves.push(`${col}${row}`);
      if (isOcupped(board, col,row, piece) === 'capture'  || isKing(piece)) break;
    }
    return totalMoves;
  }
  const left = (col, row, piece, board, am=false) =>{
    const totalMoves = [];
    let revCont = 1;
    while(col>0){
      col--;
      if(!am){
        const newBoard = []
        newBoard.push(...JSON.parse(JSON.stringify(board)));
        newBoard[row][col] = piece;
        newBoard[row][col+revCont] = "";
        revCont++;
        if (isOcupped(board, col,row, piece) === 'same') 
          break;
          if(isKing(piece)){
            if(validateMove(`${col}${row}`,newBoard, piece))
              totalMoves.push(`${col}${row}`);
            break;
          }
        else {
          if(piece==="R" || piece ==="Q"){
            if(validateMove(findKings(newBoard)[0], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        else{
            if(validateMove(findKings(newBoard)[1], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        }
      }
      if (isOcupped(board, col,row, piece) === 'same') {
        if (am) totalMoves.push(`${col}${row}`);
        break;
      }

      if(am && (isOcupped(board, col, row, piece) === 'pass' || isOcupped(board,col,row,piece)==='capture')) totalMoves.push(`${col}${row}`);
      if (isOcupped(board, col,row, piece) === 'capture'  || isKing(piece)) break;
    }
    return totalMoves;
  }
  const right = (col, row, piece, board, am=false) =>{
    const totalMoves = [];
    let revCont = 1;
    while(col<7){
      col++;
      if(!am){
        const newBoard = [];
        newBoard.push(...JSON.parse(JSON.stringify(board)));
        newBoard[row][col] = piece;
        newBoard[row][col-revCont] = "";
        revCont++;
        if (isOcupped(board, col,row, piece) === 'same') 
          break;
        if(isKing(piece)){
          if(validateMove(`${col}${row}`,newBoard, piece))
            totalMoves.push(`${col}${row}`);
          break;
        }
        else {
          if(piece==="R" || piece ==="Q"){
            if(validateMove(findKings(newBoard)[0], newBoard, piece)){
              totalMoves.push(`${col}${row}`);
            }
          }
        else{
            if(validateMove(findKings(newBoard)[1], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        }
      }
      if (isOcupped(board, col,row, piece) === 'same') {
        if (am) totalMoves.push(`${col}${row}`);
        break;
      }
      
      if(am && (isOcupped(board, col, row, piece) === 'pass' || isOcupped(board,col,row,piece)==='capture')) totalMoves.push(`${col}${row}`);
      if (isOcupped(board, col,row, piece) === 'capture'  || isKing(piece)) break;
    }
    return totalMoves;
  }
  const upRight = (col, row, piece, board, am=false) =>{
    const totalMoves = [];
    let revCont = 1;
    while(row<7 && col<7){
      row++;
      col++;
      if(!am){
        const newBoard = []
        newBoard.push(...JSON.parse(JSON.stringify(board)));
        newBoard[row][col] = piece;
        newBoard[row-revCont][col-revCont] = "";
        revCont++;
        if (isOcupped(board, col,row, piece) === 'same') 
          break;
        if(isKing(piece)){
          if(validateMove(`${col}${row}`,newBoard, piece))
            totalMoves.push(`${col}${row}`);
          break;
        }
        else {
          if(piece==="B" || piece ==="Q"){
            if(validateMove(findKings(newBoard)[0], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        else{
            if(validateMove(findKings(newBoard)[1], newBoard, piece)){
              totalMoves.push(`${col}${row}`);
            }
          }
        }
      }
      if (isOcupped(board, col,row, piece) === 'same') {
        if (am) totalMoves.push(`${col}${row}`);
        break;
      }
      
      if(am && (isOcupped(board, col, row, piece) === 'pass' || isOcupped(board,col,row,piece)==='capture')) totalMoves.push(`${col}${row}`);
      if (isOcupped(board, col,row, piece) === 'capture'  || isKing(piece)) break;
    }
    return totalMoves;
  }
  const upLeft = (col, row, piece, board, am=false) =>{
    const totalMoves = [];
    let revCont = 1;
    while(row>0 && col<7){
      row--;
      col++;
      if(!am){
        const newBoard = []
        newBoard.push(...JSON.parse(JSON.stringify(board)));
        newBoard[row][col] = piece;
        newBoard[row+revCont][col-revCont] = "";
        revCont++;
        if (isOcupped(board, col,row, piece) === 'same') 
          break;
        if(isKing(piece)){
          if(validateMove(`${col}${row}`,newBoard, piece))
            totalMoves.push(`${col}${row}`);
          break;
        }
        else {
          if(piece==="B" || piece ==="Q"){
            if(validateMove(findKings(newBoard)[0], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        else{
            if(validateMove(findKings(newBoard)[1], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        }
      }
      if (isOcupped(board, col,row, piece) === 'same') {
        if (am) totalMoves.push(`${col}${row}`);
        break;
      }
      
      if(am && (isOcupped(board, col, row, piece) === 'pass' || isOcupped(board,col,row,piece)==='capture')) totalMoves.push(`${col}${row}`);
      if (isOcupped(board, col,row, piece) === 'capture'  || isKing(piece)) break;
    }
    return totalMoves;
  }
  const downRight = (col, row, piece, board, am=false) =>{
    const totalMoves = [];
    let revCont = 1;
    while(row<7 && col>0){
      row++;
      col--;
      if(!am){
        const newBoard = []
        newBoard.push(...JSON.parse(JSON.stringify(board)));
        newBoard[row][col] = piece;
        newBoard[row-revCont][col+revCont] = "";
        revCont++;
        if (isOcupped(board, col,row, piece) === 'same') 
          break;
        if(isKing(piece)){
          if(validateMove(`${col}${row}`,newBoard, piece))
            totalMoves.push(`${col}${row}`);
          break;
        }
        else {
          if(piece==="B" || piece ==="Q"){
            if(validateMove(findKings(newBoard)[0], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        else{
            if(validateMove(findKings(newBoard)[1], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        }
      }
      if (isOcupped(board, col,row, piece) === 'same') {
        if (am) totalMoves.push(`${col}${row}`);
        break;
      }
      
      if(am && (isOcupped(board, col, row, piece) === 'pass' || isOcupped(board,col,row,piece)==='capture')) totalMoves.push(`${col}${row}`);
      if (isOcupped(board, col,row, piece) === 'capture'  || isKing(piece)) break;
    }
    return totalMoves;
  }
  const downLeft = (col, row, piece, board, am=false) =>{
    const totalMoves = [];
    let revCont = 1;
    while(row>0 && col>0){
      row--;
      col--;
      if(!am){
        const newBoard = []
        newBoard.push(...JSON.parse(JSON.stringify(board)));
        newBoard[row][col] = piece;
        newBoard[row+revCont][col+revCont] = "";
        revCont++;
        if (isOcupped(board, col,row, piece) === 'same') 
          break;
        if(isKing(piece)){
          if(validateMove(`${col}${row}`,newBoard, piece))
            totalMoves.push(`${col}${row}`);
          break;
        }
        else {
          if(piece==="B" || piece ==="Q"){
            if(validateMove(findKings(newBoard)[0], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        else{
            if(validateMove(findKings(newBoard)[1], newBoard, piece))
              totalMoves.push(`${col}${row}`);
          }
        }
      }
      if (isOcupped(board, col,row, piece) === 'same') {
        if (am) totalMoves.push(`${col}${row}`);
        break;
      }
      
      if(am && (isOcupped(board, col, row, piece) === 'pass' || isOcupped(board,col,row,piece)==='capture')) totalMoves.push(`${col}${row}`);
      if (isOcupped(board, col,row, piece) === 'capture'  || isKing(piece)) break;
    }
    return totalMoves;
  }

  const knightMoves = (col, row, piece, board, am=false) => {
    col = parseInt(col)
    row = parseInt(row)
    const totalMoves = [];
    if (row < 7) {
      if (col < 6) {
        const newPos = buildNewPosition(board, piece, row, col, 1, 2)
        if(!am && piece==="N"){
          if(validateMove(findKings(newPos)[0],newPos,piece) && isOcupped(board, col+2, row+1, piece)!=="same")
            totalMoves.push(`${col+2}${row+1}`);
        }
        else if(!am && piece==="n"){
          if(validateMove(findKings(newPos)[1],newPos,piece) && isOcupped(board, col+2, row+1, piece)!=="same")
            totalMoves.push(`${col+2}${row+1}`);
        }
        if(am) totalMoves.push(`${col+2}${row+1}`);
      }
      if (col > 1) {
        const newPos = buildNewPosition(board, piece, row, col, 1, -2)
        if(!am && piece==="N"){
          if(validateMove(findKings(newPos)[0],newPos,piece) && isOcupped(board, col-2, row+1, piece)!=="same")
            totalMoves.push(`${col-2}${row+1}`);
        }
        else if(!am && piece==="n"){
          if(validateMove(findKings(newPos)[1],newPos,piece) && isOcupped(board, col-2, row+1, piece)!=="same")
            totalMoves.push(`${col-2}${row+1}`);
        }
        if(am) totalMoves.push(`${col-2}${row+1}`);
      }
    }
    if (row > 0) {
      if (col < 6) {
        const newPos = buildNewPosition(board, piece, row, col, -1, 2)
        if(!am && piece==="N"){
          if(validateMove(findKings(newPos)[0],newPos,piece) && isOcupped(board, col+2, row-1, piece)!=="same")
            totalMoves.push(`${col+2}${row-1}`);
        }
        else if(!am && piece==="n"){
          if(validateMove(findKings(newPos)[1],newPos,piece) && isOcupped(board, col+2, row-1, piece)!=="same")
            totalMoves.push(`${col+2}${row-1}`);
        }
        if(am) totalMoves.push(`${col+2}${row-1}`);
      }
      if (col > 1) {
        const newPos = buildNewPosition(board, piece, row, col, -1, -2)
        if(!am && piece==="N"){
          if(validateMove(findKings(newPos)[0],newPos,piece) && isOcupped(board, col-2, row-1, piece)!=="same")
            totalMoves.push(`${col-2}${row-1}`);
        }
        else if(!am && piece==="n"){
          if(validateMove(findKings(newPos)[1],newPos,piece) && isOcupped(board, col-2, row-1, piece)!=="same")
            totalMoves.push(`${col-2}${row-1}`);
        }
        if(am) totalMoves.push(`${col-2}${row-1}`);
      }
    }
    if (row < 6) {
      if (col < 7) {
        const newPos = buildNewPosition(board, piece, row, col, 2, 1)
        if(!am && piece==="N"){
          if(validateMove(findKings(newPos)[0],newPos,piece) && isOcupped(board, col+1, row+2, piece)!=="same")
            totalMoves.push(`${col+1}${row+2}`);
        }
        else if(!am && piece==="n"){
          if(validateMove(findKings(newPos)[1],newPos,piece) && isOcupped(board, col+1, row+2, piece)!=="same")
            totalMoves.push(`${col+1}${row+2}`);
        }
        if(am) totalMoves.push(`${col+1}${row+2}`);
      }
      if (col > 0) {
        const newPos = buildNewPosition(board, piece, row, col, 2, -1)
        if(!am && piece==="N"){
          if(validateMove(findKings(newPos)[0],newPos,piece) && isOcupped(board, col-1, row+2, piece)!=="same")
            totalMoves.push(`${col-1}${row+2}`);
        }
        else if(!am && piece==="n"){
          if(validateMove(findKings(newPos)[1],newPos,piece) && isOcupped(board, col-1, row+2, piece)!=="same")
            totalMoves.push(`${col-1}${row+2}`);
        }
        if(am) totalMoves.push(`${col-1}${row+2}`);
      }
    }
    if (row > 1) {
      if (col < 7) {
        const newPos = buildNewPosition(board, piece, row, col, -2, 1)
        if(!am && piece==="N"){
          if(validateMove(findKings(newPos)[0],newPos,piece) && isOcupped(board, col+1, row-2, piece)!=="same")
            totalMoves.push(`${col+1}${row-2}`);
        }
        else if(!am && piece==="n"){
          if(validateMove(findKings(newPos)[1],newPos,piece) && isOcupped(board, col+1, row-2, piece)!=="same")
            totalMoves.push(`${col+1}${row-2}`);
        }
        if(am) totalMoves.push(`${col+1}${row-2}`);
      }
      if (col > 0) {
        const newPos = buildNewPosition(board, piece, row, col, -2, -1)
        if(!am && piece==="N"){
          if(validateMove(findKings(newPos)[0],newPos,piece) && isOcupped(board, col-1, row-2, piece)!=="same")
            totalMoves.push(`${col-1}${row-2}`);
        }
        else if(!am && piece==="n"){
          if(validateMove(findKings(newPos)[1],newPos,piece) && isOcupped(board, col-1, row-2, piece)!=="same")
            totalMoves.push(`${col-1}${row-2}`);
        }
        if(am) totalMoves.push(`${col-1}${row-2}`);
      }
    }
    return totalMoves;
  };

  const pawnOne = (col, row, piece, board) => {
    row = parseInt(row);
    const totalMoves = [];
    if (
      piece === 'p' &&
      isOcupped(board, col,row+1, piece) === 'pass' && validateMove(findKings(board)[1],buildNewPosition(board, piece, row, col, 1, 0))
    ) {
      totalMoves.push(`${col}${row + 1}`);
    } else if (
      piece === 'P' &&
      isOcupped(board, col,row-1, piece) === 'pass' && validateMove(findKings(board)[0],buildNewPosition(board, piece, row, col, -1, 0))
    ) {
      totalMoves.push(`${col}${row - 1}`);
    }
    return totalMoves;
  };

  const pawnTwo = (col, row, piece, board) => {
    const totalMoves = [];
    row = parseInt(row);
    if (
      row === 1 &&
      piece === 'p' &&
      isOcupped(board, col, row+2, piece) === 'pass' && isOcupped(board, col, row+1, piece) === 'pass' && validateMove(findKings(board)[1],buildNewPosition(board, piece, row, col, 2, 0))
    ) {
      totalMoves.push(`${col}${row+2}`);
    } else if (
      row === 6 &&
      piece === 'P' &&
      isOcupped(board, col, row-2, piece) === 'pass' && isOcupped(board, col, row-1, piece) === 'pass' && validateMove(findKings(board)[0],buildNewPosition(board, piece, row, col, -2, 0))
    ) {
      totalMoves.push(`${col}${row-2}`);
    }
    return totalMoves;
  };
  const pawnCapture = ( col, row , piece, board, am = false) => {
    const totalMoves = [];
    row = parseInt(row);
    col = parseInt(col);
    if (piece === 'p') {
      if (
        (!am && col<7 && (isOcupped(board, col+1, row+1, piece) === 'capture' && validateMove(findKings(board)[1],buildNewPosition(board, piece, row, col, 1, 1))) ||
        (am))
      ) {
        totalMoves.push(`${col+1}${row+1}`);
      }
      if (
        (!am && col>0 && (isOcupped(board, col-1, row+1, piece) === 'capture' && validateMove(findKings(board)[1],buildNewPosition(board, piece, row, col, 1, -1))) ||
        (am))
      ) {
        totalMoves.push(`${col-1}${row+1}`);
      }
    }
    if (piece === 'P') {
      if (
        (!am && col<7 && (isOcupped(board, col+1, row-1, piece) === 'capture' && validateMove(findKings(board)[0],buildNewPosition(board, piece, row, col, 1, -1))) ||
        (am && col<7))
      ) {
        totalMoves.push(`${col+1}${row-1}`);
      }
      if (
        (!am && col>0 && (isOcupped(board, col-1, row-1, piece) === 'capture' && validateMove(findKings(board)[0],buildNewPosition(board, piece, row, col, 1, 1))) ||
        (am && col>0))
      ) {
        totalMoves.push(`${col-1}${row-1}`);
      }
    }

    return totalMoves;
  };

  const rookMoves = (col, row ,piece, board, am=false) =>{
    return [...up(col, row, piece, board, am),...down(col, row, piece, board, am),...right(col, row, piece, board, am),...left(col, row, piece, board, am)]
  }

  const bishopMoves = (col, row ,piece, board, am=false) =>{
    return [...upRight(col, row, piece, board, am),...upLeft(col, row, piece, board, am),...downLeft(col, row, piece, board, am),...downRight(col, row, piece, board, am)]
  }

  const queenMoves = (col, row ,piece, board, am=false) =>{
    return [...rookMoves(col, row, piece, board, am),...bishopMoves(col, row, piece, board, am)]
  }

  const kingMoves = (col, row ,piece, board, am=false) =>{
    return queenMoves(col, row ,piece, board, am, true)
  }

  const pawnMoves = (col, row ,piece, board, am=false) =>{
    return[...pawnOne(col, row, piece, board),...pawnTwo(col, row, piece, board),...pawnCapture(col, row, piece, board, am)]
  }

  const isOcupped = (board, col, row, piece) => {
    const occuped = board[row][col]
    const whites = ["K","Q","R","B","N","P"];
    const blacks = ["k","q","r","b","n","p"];
    if (occuped!=="") {
      if ((whites.includes(occuped) && whites.includes(piece)) || (blacks.includes(occuped) && blacks.includes(piece))) {
        return 'same';
      } else {
        return 'capture';
      }
    }
    return 'pass';
  };

  const isKing = (piece) =>{
    return piece==="k" || piece==="K"
  }


  const controlled = (board) => {
    let bC = new Set();
    let wC = new Set();
    board.map((row,iR) => {
      row.map((sq,iC)=>{
        switch (sq) {
          case 'K':
            kingMoves(iC, iR ,sq, board, true).forEach(wC.add, wC)
            break;
          case 'k':
            kingMoves(iC, iR ,sq, board, true).forEach(bC.add, bC)
             break;
          case 'Q':
            queenMoves(iC, iR ,sq, board, true).forEach(wC.add, wC)
              break;
          case 'q':
            queenMoves(iC, iR ,sq, board, true).forEach(bC.add, bC)
              break;
          case 'R':
            rookMoves(iC, iR ,sq, board, true).forEach(wC.add, wC)
              break;
          case 'r':
            rookMoves(iC, iR ,sq, board, true).forEach(bC.add, bC)
              break;
          case 'B':
            bishopMoves(iC, iR ,sq, board, true).forEach(wC.add, wC)
                  break;
          case 'b':
            bishopMoves(iC, iR ,sq, board, true).forEach(bC.add, bC)
                  break;
          case 'N':
            knightMoves(iC, iR ,sq, board, true).forEach(wC.add, wC)
                break;
          case 'n':
            knightMoves(iC, iR ,sq, board, true).forEach(bC.add, bC)
                break;
          case 'P':
            pawnCapture(iC, iR ,sq, board, true).forEach(wC.add, wC)
                break;
          case 'p':
            pawnCapture(iC, iR ,sq, board, true).forEach(bC.add, bC)
                break;
          default:
            break;
      }
      });

    });
    return [bC, wC];
  }

  const validateMove = (ownKingPosition, newBoard, piece) =>{
    const whites = ["K","Q","R","B","N","P"];
    let color = "";
    whites.includes(piece) ? color = "white" : color = "black";
    if(color==="white"){
      if(controlled(newBoard)[0].has(ownKingPosition)){
          return false
        }
        return true
    }
    if(color==="black"){
      if(controlled(newBoard)[1].has(ownKingPosition)){
          return false
        }
        return true
    }
  }

  const findKings = board =>{
    const kings = [];
    board.map((row,iR) => {
      row.map((sq,iC)=>{
        if(sq==="K"){
          kings[0] = `${iC}${iR}`
        }
        if(sq==="k"){
          kings[1] = `${iC}${iR}`
        }
      })
    })
    return kings
  }

  const buildNewPosition = (board, piece, row, col, plusRow, plusCol) =>{
    const newBoard = [];
    newBoard.push(...JSON.parse(JSON.stringify(board)));
    newBoard[row][col] = piece;
    newBoard[row+plusRow][col+plusCol] = "";
    return newBoard;
  }
  
  return {
    kingMoves,
    queenMoves,
    rookMoves,
    bishopMoves,
    knightMoves,
    pawnMoves,
    controlled,
  };
  
}

export default ChessMoves;

//No puedo defender jaque con peón, no se puede tapar con caballo
//Revisar negativo en ¿peón? -- revisar si se arregló
//Pendiente los turnos
//Enroque y peón al paso
//Jaques, Mate y Ahogado
//Método para convertir a Fen y viceversa
//Drag And Drop
//Notaciones
//CSS Clases para posibles movimientos