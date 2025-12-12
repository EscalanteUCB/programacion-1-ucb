class Player {
  constructor(row, col, value = 10) {
    this.row = row;
    this.col = col;
    this.value = value;
  }

  move(dr, dc, rows, cols, mapMatrix) {
    const newRow = this.row + dr;
    const newCol = this.col + dc;

    if (newRow < 0 || newRow >= rows) return;
    if (newCol < 0 || newCol >= cols) return;

    const cellValue = mapMatrix.getValue(newRow, newCol);

    // OBJETOS INMOVIBLES
    const unwalkable = [5, 6, 7]; 
    if (unwalkable.includes(cellValue)) return;

    // SI ES UN BLOQUE (2), INTENTAR EMPUJARLO
    if (cellValue === 2) {

      const nextRow = newRow + dr;
      const nextCol = newCol + dc;

      if (!mapMatrix.isValidPosition(nextRow, nextCol)) return;

      const nextCell = mapMatrix.getValue(nextRow, nextCol);

      // SOLO PERMITIDO MOVERSE A PISO (1) O OBJETIVO (3)
      if (nextCell === 0 || nextCell === 3) {

        // Mover bloque a la siguiente celda
        mapMatrix.setValue(nextRow, nextCol, 2);

        // Dejar vacía la celda donde estaba el bloque
        mapMatrix.setValue(newRow, newCol, 0);

      } else {
        return; // No se puede empujar
      }
    }

    // SI LLEGAMOS AQUÍ EL JUGADOR SE MUEVE
    this.row = newRow;
    this.col = newCol;
  }
}