class Matrix {
  rows;
  cols;
  data;

  constructor(rowsParam, colsParam, defaultValue) {
    this.rows = rowsParam;
    this.cols = colsParam;
    this.data = [];

    for (let i = 0; i < rowsParam; i++) {
      const rowTemp = [];
      for (let j = 0; j < colsParam; j++) {
        rowTemp.push(defaultValue);
      }
      this.data.push(rowTemp);
    }
  }

  //Función de validacion de rango valido en la matriz
  isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  setValue(row, col, value) {
    //if (isValidPosition(row, col)) {
    this.data[row][col] = value;
    //}
  }

  getValue(row, col) {
    if (this.isValidPosition(row, col)) {
      return this.data[row][col];
    } else {
      return null
    }
  }

  fillRandom(min, max) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        this.data[i][j] = random;
      }
    }
  }

  ejecicio1() {
    var serieX = 1;
    var serieY = 4;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = serieX;
        serieX++;
        if(serieX%4==0){
          serieX = serieX - 3;
        }
      }
      console.log("fila: " + i)
      serieX = serieY * (i+1);
      console.log("serieX: " + serieX)
    }
  }
  ejercicio2() {
    console.log("entor al ejercicio2")
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === 0 || j === 0 || i === 9 || j === 9) {
          this.data[i][j] = 0;
        }
        else {
          this.data[i][j] = 1;
        }
      }
    }
  }
  ejercicio3() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {

        var mitadColumna = Math.floor(this.cols / 2);
        var mitadFilas = Math.floor(this.rows / 2);
        if (i === mitadFilas || j === mitadColumna) {
          this.data[i][j] = 1;
        }
      }
    }
  }

  ejercicio4() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === 0 || j === 0 || i === 9 || j === 9) {
          this.data[i][j] = 1;
        }
        else {
          if (i === j || i + j === 9) {
            this.data[i][j] = 2;

          }
          else {
            this.data[i][j] = 0;
          }
        }
      }
    }
  }
  ejercicio5() {
    const tercio = Math.floor(this.rows / 3);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i < tercio) {
          this.data[i][j] = 1;
        } else if (i < 2 * tercio) {
          this.data[i][j] = 2;
        } else {
          this.data[i][j] = 3;
        }
      }
    }

  }




  toString() {
    return this.data.map(row => row.join('\t')).join('\n');
  }
}
