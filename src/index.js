
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = []
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2) {
        matrix[i].reverse()
      }
      result = result.concat(matrix[i])
    }
  }
  return result;
}
