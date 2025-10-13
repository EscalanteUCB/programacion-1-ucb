class Matrix {
  rows;
  cols;
  data;

  constructor(rows, cols, defaultValue) {
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
        this.data[i][j] = random;
      }
    }
  }

  toString() {
    return this.data.map(row => row.join('\t')).join('\n');
  }

  isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }
}
