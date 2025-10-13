// import visualization libraries {
const { Array2DTracer, Layout, LogTracer, Tracer, VerticalLayout } = require('algorithm-visualizer');
// }

// define tracer variables {
const array2dTracer = new Array2DTracer('Matriz');
const logTracer = new LogTracer('Consola');
// }

// Matrix class adaptada
class Matrix {
  constructor(rows, cols, defaultValue = 0) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(defaultValue);
      }
      this.data.push(row);
    }
  }

  setValue(row, col, value) {
    if (this.isValidPosition(row, col)) {
      this.data[row][col] = value;
      // visualize {
      array2dTracer.patch(row, col, value);
      logTracer.println(`Set [${row}, ${col}] = ${value}`);
      Tracer.delay();
      array2dTracer.depatch(row, col);
      // }
    }
  }

  getValue(row, col) {
    if (this.isValidPosition(row, col)) {
      return this.data[row][col];
    }
    return null;
  }

  fillRandom(min, max) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        this.setValue(i, j, random); // usa setValue para visualizar
      }
    }
  }

  isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }
}

// MAIN
(function main() {
  // Crear matriz 5x5
  const matrix = new Matrix(5, 5, 0);

  // visualize {
  Layout.setRoot(new VerticalLayout([array2dTracer, logTracer]));
  array2dTracer.set(matrix.data);
  Tracer.delay();
  // }

  // Llenar con valores aleatorios y visualizar
  matrix.fillRandom(1, 9);

  // Ejemplo: cambiar un valor específico
  matrix.setValue(2, 3, 99);
})();
